from django.conf.urls import patterns, include, url
from .views import GameView, GameCreateView, GameListView, game_detail_ajax

urlpatterns = patterns('',
    url(r'^$', GameListView.as_view(), name='pong-game-list'),
    url(r'^play/(?P<pk>[0-9]+)/$', GameView.as_view(), name='pong-game-detail'),
    url(r'^create/', GameCreateView.as_view(), name='pong-game-create'),

    url(r'^ajax/game/(?P<pk>[0-9]+)/$', game_detail_ajax, name='pong-game-detail-ajax'),
)
