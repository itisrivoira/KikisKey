import pygame
from utilities.font import getFont

def dialogo(txt,finestra,OFFSET_FINESTRA):
  font = getFont("forwardFont", int(16 * OFFSET_FINESTRA))
  text=font.render(txt,True,(0,0,0))
  img=pygame.image.load('utilities/assets/textBox1.png')
  img=pygame.transform.scale(img, (int(img.get_width() * OFFSET_FINESTRA*6), int(img.get_height() * OFFSET_FINESTRA*3)))
  imgRect=img.get_rect(center=(600*OFFSET_FINESTRA, 640*OFFSET_FINESTRA))
  textRect=text.get_rect(center=(600*OFFSET_FINESTRA, 640*OFFSET_FINESTRA))
  finestra.blit(img,imgRect)
  finestra.blit(text,textRect)