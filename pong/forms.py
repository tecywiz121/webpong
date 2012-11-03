from django import forms
from .models import Game

class GameForm(forms.ModelForm):
    class Meta:
        model = Game
        fields = ('name',)

class ActionForm(forms.Form):
    time = forms.IntegerField()
    action = forms.CharField(max_length=2)
