from django.views.generic import ListView
from django.views.generic.detail import DetailView
from django.views.generic.edit import CreateView
from django.contrib.auth.decorators import login_required
from django.views.decorators.http import require_POST
from django.utils.decorators import method_decorator
from django.http import HttpResponseRedirect, HttpResponse, \
                        HttpResponseBadRequest, HttpResponseServerError, HttpResponseForbidden
from django.shortcuts import get_object_or_404
import django.utils.simplejson as json

from .forms import GameForm, ActionForm

from pong.models import Game

from sim.pong import Pong
from django.views.decorators.csrf import csrf_exempt

class GameView(DetailView):
    model = Game
    context_object_name = "game"

    @method_decorator(login_required)
    def dispatch(self, *args, **kwargs):
        return super(GameView, self).dispatch(*args, **kwargs)

    def post(self, *args, **kwargs):
        '''Post to join a game'''
        game = self.get_object()
        user = self.request.user

        if game.player1 == user:
            return HttpResponseBadRequest('You cannot join this game')
        elif game.player2 == user:
            pass # Skip saving and just redirect to the game
        elif game.player2 != None:
            return HttpResponseServerError('This game is already full')
        else:
            game.player2 = user
            game.simulator.action(0, 0, 'B')
            game.save()

        return HttpResponseRedirect(game.get_absolute_url())

class GameListView(ListView):
    model = Game
    context_object_name = "games"

    @method_decorator(login_required)
    def dispatch(self, *args, **kwargs):
        return super(GameListView, self).dispatch(*args, **kwargs)

    def get_queryset(self):
        user = self.request.user
        return Game.objects.exclude(player1=user).filter(player2=None)

class GameCreateView(CreateView):
    model = Game
    form_class = GameForm
    context_object_name = "game"

    @method_decorator(login_required)
    def dispatch(self, *args, **kwargs):
        return super(GameCreateView, self).dispatch(*args, **kwargs)

    def form_valid(self, form):
        self.object = form.save(commit=False)
        self.object.player1 = self.request.user
        self.object.save()
        return HttpResponseRedirect(self.get_success_url())

@login_required
def game_detail_ajax(request, pk):
    game = get_object_or_404(Game, pk=pk)
    response = {'status': 'ready' if game.player2 else 'waiting'}
    return HttpResponse(json.dumps(response),
        content_type='application/json')

@login_required
@require_POST
@csrf_exempt
def game_send_action_ajax(request, pk):
    game = get_object_or_404(Game, pk=pk)
    user = request.user

    form = ActionForm(request.POST)

    if not form.is_valid():
        return HttpResponseBadRequest(json.dumps(form.errors), content_type='application/json')

    if user == game.player1:
        player = Pong.PLAYER1
    elif user == game.player2:
        player = Pong.PLAYER2
    else:
        return HttpResponseForbidden('Not your game')

    time = form.cleaned_data['time']
    action = form.cleaned_data['action']
    game.simulator.action(player, time, action)
    game.save()
    print game.simulator.current_state.ball().position_x, game.simulator.current_state.ball().position_y
    game.simulator.tick()

    return_action = (0, game.simulator.current_time, 'N')
    return_state = game.simulator.current_state
    return HttpResponse(json.dumps([return_action, return_state.toJSON()]), content_type='application/json')
