import pygame
from pygame import mixer

class music():
   def __init__(self, musicOn, track, volume):
      self.musicOn = musicOn
      self.volume = volume
      self.track = track

   def setMusicOn(self, val):
      self.musicOn = val

   def getMusicOn(self):
      return self.musicOn

   def setVolume(self, vol):
      self.volume = vol

   def getVolume(self):
      return self.volume

   def playMusic(self):
      mixer.music.load(self.track)
      mixer.music.set_volume(self.volume)
      mixer.music.play(-1)
      self.setMusicOn(True)

   def stopMusic(self):
      mixer.music.stop()
      self.setMusicOn(False)
