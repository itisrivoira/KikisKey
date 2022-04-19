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


   def aggplayer(self,finestra,left,right,up,down,y,x,tipostanza,key):
      self.x=x
      self.y=y
      #self.Cam=pygame.Rect(self.x-self.img.get_width(), self.y-self.img.get_height(), self.img.get_width()*3, self.img.get_height()*3)
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
         #pygame.draw.rect(finestra,"red",self.rect,1)

      elif right:
         finestra.blit(self.walkright[self.walkcount//8],(self.x,self.y))
         self.walkcount+=int(self.fps/22)
         self.img= self.walkright[0]
         #pygame.draw.rect(finestra,"red",self.rect,1)

      elif up:
         finestra.blit(self.walkup[self.walkcount//8],(self.x,self.y))
         self.walkcount+=int(self.fps/22)
         self.img= self.walkup[0]
         #pygame.draw.rect(finestra,"red",self.rect,1)

      elif down:
         finestra.blit(self.walkdown[self.walkcount//8],(self.x,self.y))
         self.walkcount+=int(self.fps/22)
         self.img= self.walkdown[0]
         #pygame.draw.rect(finestra,"red",self.rect,1)

      else:
         finestra.blit(self.img,(self.x,self.y)) 
         #pygame.draw.rect(finestra,"red",self.rect,1)


      #collisioni x*3 y*2

      if self.tipost=="chimica2" :
         #parte alta stanza
         col1=pygame.Rect((116.6*3*self.off,46*2*self.off,(278.3-116.6)*3*self.off,10*2*self.off) )
         #pygame.draw.rect(finestra,"red", col1,1)

         #parte sinistra stanza
         col2=pygame.Rect((111.6*3*self.off,46*2*self.off,(116.6-111.6)*3*self.off,(355-56)*2*self.off) )
         #pygame.draw.rect(finestra,"red", col2,1)

         #parte destra stanza
         col3=pygame.Rect((277.3*3*self.off,46*2*self.off,(10)*3*self.off,(346-41)*2*self.off) )
         #pygame.draw.rect(finestra,"red", col3,1)

         #parte bassa stanza
         col4=pygame.Rect((111.6*3*self.off,343*2*self.off,(156-111.6)*3*self.off,(10)*2*self.off) )
         #pygame.draw.rect(finestra,"red", col4,1)

         #parte bassa stanza
         col41=pygame.Rect((174.5*3*self.off,343*2*self.off,(278.3-174.5)*3*self.off,(10)*2*self.off) )
         #pygame.draw.rect(finestra,"red", col41,1)

         #scrivania pc
         col5=pygame.Rect((255.3*3*self.off,130.5*2*self.off,(276.3-255.3)*3*self.off,(184.5-130.5)*2*self.off) )
         #pygame.draw.rect(finestra,"red", col5,1)
         
         #sedia pc
         col6=pygame.Rect((247.3*3*self.off,144*2*self.off,(256-247.3)*3*self.off,(171-144)*2*self.off) )
         #pygame.draw.rect(finestra,"red", col6,1)

         #acquario 
         col7=pygame.Rect((255.3*3*self.off,204*2*self.off,(277.3-255.3)*3*self.off,(250.5-205.5)*2*self.off) )
         #pygame.draw.rect(finestra,"red", col7,1)

         #porta 
         col8=pygame.Rect((156.5*3*self.off,343*2*self.off,(174.5-156.5)*3*self.off,(10)*2*self.off) )
         #pygame.draw.rect(finestra,"red", col8,1)

         #scaffale piglia acido
         col9=pygame.Rect((150.3*3*self.off,46*2*self.off,(180.8-150.3)*3*self.off,17*2*self.off) )
         #pygame.draw.rect(finestra,"red", col9,1)

         for col in [col1,col2,col3,col4,col41,col5,col6,col7]:
            if self.rect.colliderect(col):
               if left:
                  self.x+=self.speed
               if right:
                  self.x-=self.speed
               if up:
                  self.y+=self.speed
               if down:
                  self.y-=self.speed
            if self.rect.colliderect(col8):
               self.tipost="chimica1"
            if self.rect.colliderect(col9) and key:
               self.oggAcido=True
               print("hai preso l'acido")

      elif self.tipost=="chimica1":
         print ("ciao")
      
      
      pygame.display.update()
      return self.x,self.y,self.tipost