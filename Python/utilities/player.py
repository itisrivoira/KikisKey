import pygame

class player():
   def __init__(self, immaginiP, OFFSET_FINESTRA,x,y,FPS,speed,walkcount):
      self.img=immaginiP["kikiF0"]
      self.walkleft=[
            immaginiP["kikiS0"],immaginiP["kikiS1"],immaginiP["kikiS2"],immaginiP["kikiS3"],
            immaginiP["kikiS4"],immaginiP["kikiS5"],immaginiP["kikiS6"],immaginiP["kikiS7"]]

      self.walkright=[
            immaginiP["kikiD0"],immaginiP["kikiD1"],immaginiP["kikiD2"],immaginiP["kikiD3"],
            immaginiP["kikiD4"],immaginiP["kikiD5"],immaginiP["kikiD6"],immaginiP["kikiD7"]]

      self.walkup=[
            immaginiP["kikiR0"],immaginiP["kikiR1"],immaginiP["kikiR2"],immaginiP["kikiR3"],
            immaginiP["kikiR4"],immaginiP["kikiR5"],immaginiP["kikiR6"],immaginiP["kikiR7"]]

      self.walkdown=[
            immaginiP["kikiF0"],immaginiP["kikiF1"],immaginiP["kikiF2"],immaginiP["kikiF3"],
            immaginiP["kikiF4"],immaginiP["kikiF5"],immaginiP["kikiF6"],immaginiP["kikiF7"]]

      self.x = x*OFFSET_FINESTRA
      self.y = y*OFFSET_FINESTRA
      self.speed = speed*OFFSET_FINESTRA
      self.fps=FPS
      self.walkcount=walkcount


   def aggplayer(self,finestra,left,right,up,down,y,x):
      self.x=x
      self.y=y
           
      if self.walkcount +1 >=self.fps:
         self.walkcount=0
            
      if left:
         finestra.blit(self.walkleft[self.walkcount//8],(self.x,self.y))
         self.walkcount+=int(self.fps/22)
         self.img= self.walkleft[0]

      elif right:
         finestra.blit(self.walkright[self.walkcount//8],(self.x,self.y))
         self.walkcount+=int(self.fps/22)
         self.img= self.walkright[0]

      elif up:
         finestra.blit(self.walkup[self.walkcount//8],(self.x,self.y))
         self.walkcount+=int(self.fps/22)
         self.img= self.walkup[0]

      elif down:
         finestra.blit(self.walkdown[self.walkcount//8],(self.x,self.y))
         self.walkcount+=int(self.fps/22)
         self.img= self.walkdown[0]

      else:
         finestra.blit(self.img,(self.x,self.y))

      pygame.display.update()	