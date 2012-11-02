from django.db import models
from django.contrib.auth.models import User


class Game(models.Model):
   name = models.CharField(max_length=200)
   player1 = models.ForeignKey(User, related_name="+")
   player2 = models.ForeignKey(User, related_name="+", blank=True, null=True)

   start_time = models.DateTimeField(blank=True, null=True)

   @models.permalink
   def get_absolute_url(self):
       return ('pong-game-detail', [], {'pk': str(self.pk)})

class State(models.Model):
   class Meta:
      ordering = ['time']

   time = models.IntegerField(db_index=True)
   game = models.ForeignKey(Game, related_name="states")

   ball_px = models.IntegerField()
   ball_py = models.IntegerField()

   ball_vx = models.IntegerField()
   ball_vy = models.IntegerField()

   paddle1_position = models.IntegerField()
   paddle2_position = models.IntegerField()

   paddle1_velocity = models.IntegerField()
   paddle2_velocity = models.IntegerField()

class Action(models.Model):
   NULL = 'N'
   BALL = 'B'
   UP_PRESS = 'PU'
   UP_RELEASE = 'RU'
   DOWN_PRESS = 'PD'
   DOWN_RELEASE = 'RD'
   TYPE_CHOICES = (
      (NULL, 'No Action'),
      (BALL, 'Ball Release'),
      (UP_PRESS, 'Up Press'),
      (UP_RELEASE, 'Up Release'),
      (DOWN_PRESS, 'Down Press'),
      (DOWN_RELEASE, 'Down Release'),
   )

   PLAYER1 = 0
   PLAYER2 = 1
   PLAYER_CHOICES = (
      (PLAYER1, 'Player 1'),
      (PLAYER2, 'Player 2'),
   )

   state = models.OneToOneField(State, primary_key=True, related_name="action")
   type = models.CharField(choices=TYPE_CHOICES, max_length=2)
   player = models.IntegerField(choices=PLAYER_CHOICES)
