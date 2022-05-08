import pygame
from utilities.font import getFont

global img
img=pygame.image.load('screens/game/assets/textBox2.png')

def dialogo(txt,finestra,OFFSET_FINESTRA):
  global img
  font = getFont("forwardFont", int(16 * OFFSET_FINESTRA))
  text=font.render(txt,True,(0,0,0))
  img1=pygame.transform.scale(img, (int(img.get_width() * OFFSET_FINESTRA*6), int(img.get_height() * OFFSET_FINESTRA*3)))
  imgRect=img1.get_rect(center=(630*OFFSET_FINESTRA, 640*OFFSET_FINESTRA))
  textRect=text.get_rect(center=(630*OFFSET_FINESTRA, 640*OFFSET_FINESTRA))
  finestra.blit(img1,imgRect)
  finestra.blit(text,textRect)