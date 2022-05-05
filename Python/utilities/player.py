import pygame
from utilities.dialoghi import dialogo
from utilities.collisioni import collisioni

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
      #walkcount serve per le animazioni personaggio
      self.walkcount=walkcount
      self.off=OFFSET_FINESTRA

      #oggetti ottenuti
      self.oggAcido=False


   def aggplayer(self,finestra,left,right,up,down,y,x,tipostanza,key,attivaInv,inventarioImg):
      self.x=x
      self.y=y
      #hitbox player
      self.rect=pygame.Rect(self.x, self.y, self.img.get_width(), self.img.get_height())
      #self.rect=pygame.Rect(self.x+self.img.get_width()/3.3, self.y+self.img.get_height()/1.8, self.img.get_width()/2.4, self.img.get_height()/3.4)
      
      #stanza attuale
      self.tipost=tipostanza

      #posizione player
      txt="x: "+str(x)+" y: "+str(y)
      print(txt)
        
      if self.walkcount +1 >=self.fps:
         self.walkcount=0
            
      if left:
         finestra.blit(self.walkleft[self.walkcount//8],(self.x,self.y))
         self.walkcount+=int(self.fps/22*self.off)
         self.img= self.walkleft[0]
         pygame.draw.rect(finestra,"red",self.rect,1)

      elif right:
         finestra.blit(self.walkright[self.walkcount//8],(self.x,self.y))
         self.walkcount+=int(self.fps/22*self.off)
         self.img= self.walkright[0]
         pygame.draw.rect(finestra,"red",self.rect,1)

      elif up:
         finestra.blit(self.walkup[self.walkcount//8],(self.x,self.y))
         self.walkcount+=int(self.fps/22*self.off)
         self.img= self.walkup[0]
         pygame.draw.rect(finestra,"red",self.rect,1)

      elif down:
         finestra.blit(self.walkdown[self.walkcount//8],(self.x,self.y))
         self.walkcount+=int(self.fps/22*self.off)
         self.img= self.walkdown[0]
         pygame.draw.rect(finestra,"red",self.rect,1)

      else:
         finestra.blit(self.img,(self.x,self.y)) 
         pygame.draw.rect(finestra,"red",self.rect,1)

      
   #STANZA CHIMICA2
      if self.tipost=="chimica2" :

         #importo collisioni generali
         collisione=collisioni(self.tipost,self.off)

         #porta da cambiare 642 con 652
         porta=pygame.Rect( (504*self.off,642*self.off,(570-504)*self.off,30*self.off) )
         #pygame.draw.rect(finestra,"red", porta,1)

         #scaffale piglia acido
         scaffale=pygame.Rect( (492*self.off,148*self.off,(586-492)*self.off,30*self.off) )
         #pygame.draw.rect(finestra,"red", scaffale,1)

         for col in collisione:
            if self.rect.colliderect(col):
               if left:
                  self.x+=self.speed
               if right:
                  self.x-=self.speed
               if up:
                  self.y+=self.speed
               if down:
                  self.y-=self.speed

            if self.rect.colliderect(porta):
               self.tipost="chimica1"
               self.x=174.5
               self.y=120.5
            if self.rect.colliderect(scaffale):
               dialogo("c'è qualcosa...",finestra,self.off)
               if key:
                  self.oggAcido=True


   #STANZA CHIMICA1        
      elif self.tipost=="chimica1":

         #IMPORTO TUTTE LE COLLISIONI GENERALI
         collisione=collisioni(self.tipost,self.off)

         #porta chimica1
         porta1=pygame.Rect( (174.5*self.off,90.5*self.off,(246-174.5)*self.off,30*self.off) )
         #pygame.draw.rect(finestra,"red", porta,1)

         #porta bidelleria
         porta2=pygame.Rect( (42.5*self.off,516.5*self.off,30*self.off,(584.5-516.5)*self.off) )
         pygame.draw.rect(finestra,"red", porta2,1)

         for col in collisione:
            if self.rect.colliderect(col):
               if left:
                  self.x+=self.speed
               if right:
                  self.x-=self.speed
               if up:
                  self.y+=self.speed
               if down:
                  self.y-=self.speed

         if self.rect.colliderect(porta1):
               self.tipost="chimica2"
               self.x=502.5
               self.y=556.5

         if self.rect.colliderect(porta2):
               self.tipost="bidelleriaFuori"
               self.x=1142.5
               self.y=468.5

               
   #STANZA BIDELLERIA FUORI            
      elif self.tipost=="bidelleriaFuori":

         #importo collisioni generali
         #collisione=collisioni(self.tipost,self.off)
         
         #porta chimica1
         porta1=pygame.Rect( (1214.5*self.off,468.5*self.off,30*self.off,(540.5-468.5)*self.off) )
         pygame.draw.rect(finestra,"red", porta1,1)

         #for col in collisione:
            #if self.rect.colliderect(col):
               #if left:
                  #self.x+=self.speed
               #if right:
                  #self.x-=self.speed
               #if up:
                  #self.y+=self.speed
               #if down:
                  #self.y-=self.speed
         
         if self.rect.colliderect(porta1):
               self.tipost="chimica1"
               self.x=74.5
               self.y=516.5


   #Mostra inventario
      if attivaInv:
         inventarioImg.aggsfondo(finestra)
         if self.oggAcido:
            ogg=pygame.image.load('screens/game/assets/AcidoC.png').convert()
            finestra.blit(ogg,(500,224))


      pygame.display.update()
      return self.x,self.y,self.tipost