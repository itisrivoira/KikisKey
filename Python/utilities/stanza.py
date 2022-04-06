import pygame

class stanza():
   def __init__(self, img, OFFSET_FINESTRA):
      self.img=img
      self.rect=self.img.get_rect()
      self.rect.center=(int(1280*OFFSET_FINESTRA/2), int(720*OFFSET_FINESTRA/2))

   def aggsfondo(self,finestra):
      finestra.blit(self.img,self.rect)