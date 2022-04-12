from turtle import speed
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
      self.off=OFFSET_FINESTRA


   def aggplayer(self,finestra,left,right,up,down,y,x,tipostanza):
      self.x=x
      self.y=y
      #self.rect=pygame.Rect(self.x, self.y, self.img.get_width(), self.img.get_height())
      self.rect=pygame.Rect(self.x+self.img.get_width()/3, self.y+self.img.get_height()/2, self.img.get_width()/3, self.img.get_height()/4)
      self.tipost=tipostanza
      txt="x: "+str(x/3)+" y: "+str(y/2)
      #print(txt)
        
      if self.walkcount +1 >=self.fps:
         self.walkcount=0
            
      if left:
         finestra.blit(self.walkleft[self.walkcount//8],(self.x,self.y))
         self.walkcount+=int(self.fps/22)
         self.img= self.walkleft[0]
         self.rectp=pygame.Rect(self.rect)
         #pygame.draw.rect(finestra,"red",self.rectp,1)

      elif right:
         finestra.blit(self.walkright[self.walkcount//8],(self.x,self.y))
         self.walkcount+=int(self.fps/22)
         self.img= self.walkright[0]
         self.rectp=pygame.Rect(self.rect)
         #pygame.draw.rect(finestra,"red",self.rectp,1)

      elif up:
         finestra.blit(self.walkup[self.walkcount//8],(self.x,self.y))
         self.walkcount+=int(self.fps/22)
         self.img= self.walkup[0]
         self.rectp=pygame.Rect(self.rect)
         #pygame.draw.rect(finestra,"red",self.rectp,1)

      elif down:
         finestra.blit(self.walkdown[self.walkcount//8],(self.x,self.y))
         self.walkcount+=int(self.fps/22)
         self.img= self.walkdown[0]
         self.rectp=pygame.Rect(self.rect)
         #pygame.draw.rect(finestra,"red",self.rectp,1)

      else:
         finestra.blit(self.img,(self.x,self.y))
         self.rectp=pygame.Rect(self.rect)
         #pygame.draw.rect(finestra,"red",self.rectp,1)


      #x*3 y*2
      if self.tipost=="chimica2" :
         col1=pygame.Rect((116.6*3*self.off,(56-10)*2*self.off,(278.3-116.6)*3*self.off,10*2*self.off) )
         #pygame.draw.rect(finestra,"red", col1,1)
         col2=pygame.Rect((111.6*3*self.off,(56-10)*2*self.off,(116.6-111.6)*3*self.off,(355-56)*2*self.off) )
         #pygame.draw.rect(finestra,"red", col2,1)
         col3=pygame.Rect((277.3*3*self.off,(56-10)*2*self.off,(10)*3*self.off,(346-41)*2*self.off) )
         #pygame.draw.rect(finestra,"red", col3,1)
         col4=pygame.Rect((111.6*3*self.off,343*2*self.off,(278.3-111.6)*3*self.off,10*2*self.off) )
         #pygame.draw.rect(finestra,"red", col4,1)
         
         for col in [col1,col2,col3,col4]:
            if self.rectp.colliderect(col):
               if left:
                  self.x+=self.speed
               if right:
                  self.x-=self.speed
               if up:
                  self.y+=self.speed
               if down:
                  self.y-=self.speed

      else:
         print("errore nome stanza")
      
      
      pygame.display.update()
      return self.x,self.y