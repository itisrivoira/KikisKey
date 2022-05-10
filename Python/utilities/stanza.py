import pygame
from utilities.font import getFont

class stanza():
   def __init__(self, img, OFFSET_FINESTRA):
      self.img=img
      self.rect=self.img.get_rect()
      self.rect.center=(int(1280*OFFSET_FINESTRA/2), int(720*OFFSET_FINESTRA/2))
      self.inventario=(int(1280*OFFSET_FINESTRA/2-145*OFFSET_FINESTRA), int(170*OFFSET_FINESTRA))
      self.off=OFFSET_FINESTRA

   def aggsfondo(self,finestra):
      finestra.blit(self.img,self.rect)
   
   def agginventario(self,finestra):
      font = getFont("forwardFont", int(16 * self.off))
      text=font.render("Inventario(ESC per chiudere)",True,(0,0,0))
      finestra.blit(self.img,self.rect)
      finestra.blit(text,self.inventario)