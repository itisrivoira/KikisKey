import pygame
from pygame import mixer

def playMusic():
   mixer.music.load("assets/music/musica.mp3")
   mixer.music.set_volume(0.5)
   mixer.music.play(-1)

def stop():
   mixer.music.stop()
