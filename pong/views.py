from django.views.generic import ListView
from django.views.generic.detail import DetailView
from django.views.generic.edit import CreateView
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator
from django.http import HttpResponseRedirect, HttpResponse
from django.shortcuts import get_object_or_404
import django.utils.simplejson as json

from .forms import GameForm

from pong.models import Game

class GameView(DetailView):
    model = Game
    context_object_name = "game"

    @method_decorator(login_required)
    def dispatch(self, *args, **kwargs):
        return super(GameView, self).dispatch(*args, **kwargs)

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
