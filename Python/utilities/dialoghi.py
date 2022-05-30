from re import T
import pygame
from utilities.font import getFont

global img,img1
img=pygame.image.load('screens/game/assets/textBox2.png')
img1=pygame.image.load('screens/game/assets/text.png')

def dialogo(txt,finestra,OFFSET_FINESTRA):
  global img
  img=img.convert_alpha()
  font = getFont("forwardFont", int(17 * OFFSET_FINESTRA))
  text=font.render(txt,True,(0,0,0))
  font = getFont("forwardFont", int(13 * OFFSET_FINESTRA))
  Tasto=font.render("Clicca E",True,(0,0,0))
  img1=pygame.transform.scale(img, (int(img.get_width() * OFFSET_FINESTRA*6), int(img.get_height() * OFFSET_FINESTRA*3)))
  imgRect=img1.get_rect(center=(630*OFFSET_FINESTRA, 640*OFFSET_FINESTRA))
  textRect=text.get_rect(center=(630*OFFSET_FINESTRA, 640*OFFSET_FINESTRA))
  finestra.blit(img1,imgRect)
  finestra.blit(text,textRect)
  finestra.blit(Tasto,(750*OFFSET_FINESTRA,670*OFFSET_FINESTRA))

def ottenuto(txt,finestra,OFFSET_FINESTRA):
  global img1
  img1=img1.convert_alpha()
  font = getFont("forwardFont", int(15 * OFFSET_FINESTRA))
  text=font.render(txt,True,(0,0,0))
  font = getFont("forwardFont", int(9.5 * OFFSET_FINESTRA))
  Tasto=font.render("Inventario(F)",True,(0,0,0))
  img2=pygame.transform.scale(img1, (int(img1.get_width() * OFFSET_FINESTRA*0.5), int(img1.get_height() * OFFSET_FINESTRA*0.4)))
  imgRect=img2.get_rect(center=(1100*OFFSET_FINESTRA, 660*OFFSET_FINESTRA))
  textRect=text.get_rect(center=(1100*OFFSET_FINESTRA, 660*OFFSET_FINESTRA))
  finestra.blit(img2,imgRect)
  finestra.blit(text,textRect)
  finestra.blit(Tasto,(1153*OFFSET_FINESTRA,675*OFFSET_FINESTRA))