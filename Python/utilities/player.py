import pygame
from utilities.dialoghi import dialogo
from utilities.stanza import stanza

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


   def aggplayer(self,finestra,left,right,up,down,y,x,tipostanza,key):
      self.x=x
      self.y=y
      #camera
      #self.Cam=pygame.Rect(self.x-self.img.get_width()*3, self.y-self.img.get_height()*3, self.img.get_width()*6, self.img.get_height()*6)
      #hitbox player
      #self.rect=pygame.Rect(self.x, self.y, self.img.get_width(), self.img.get_height())
      self.rect=pygame.Rect(self.x+self.img.get_width()/3.3, self.y+self.img.get_height()/1.8, self.img.get_width()/2.4, self.img.get_height()/3.4)
      
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
         #pygame.draw.rect(finestra,"blue",self.Cam,1)

      elif right:
         finestra.blit(self.walkright[self.walkcount//8],(self.x,self.y))
         self.walkcount+=int(self.fps/22*self.off)
         self.img= self.walkright[0]
         pygame.draw.rect(finestra,"red",self.rect,1)
         #pygame.draw.rect(finestra,"blue",self.Cam,1)

      elif up:
         finestra.blit(self.walkup[self.walkcount//8],(self.x,self.y))
         self.walkcount+=int(self.fps/22*self.off)
         self.img= self.walkup[0]
         pygame.draw.rect(finestra,"red",self.rect,1)
         #pygame.draw.rect(finestra,"blue",self.Cam,1)

      elif down:
         finestra.blit(self.walkdown[self.walkcount//8],(self.x,self.y))
         self.walkcount+=int(self.fps/22*self.off)
         self.img= self.walkdown[0]
         pygame.draw.rect(finestra,"red",self.rect,1)
         #pygame.draw.rect(finestra,"blue",self.Cam,1)

      else:
         finestra.blit(self.img,(self.x,self.y)) 
         pygame.draw.rect(finestra,"red",self.rect,1)
         #pygame.draw.rect(finestra,"blue",self.Cam,1)


      #collisioni x*3 y*2

      if self.tipost=="chimica2" :

         collisione=[]
         
         #parte alta stanza
         collisione.append(pygame.Rect((392*self.off,134*self.off,(872.3-392)*self.off,30*self.off) ))
         #pygame.draw.rect(finestra,"red", col1,1)

         #parte sinistra stanza
         collisione.append(pygame.Rect((362*self.off,164*self.off,30*self.off,(651-164)*self.off) ))
         #pygame.draw.rect(finestra,"red", col2,1)

         #parte destra stanza
         collisione.append(pygame.Rect((876*self.off,164*self.off,30*self.off,(648-164)*self.off) ))
         #pygame.draw.rect(finestra,"red", col3,1)

         #parte bassa stanza1
         collisione.append(pygame.Rect((392*self.off,642*self.off,(504-392)*self.off,30*self.off) ))
         #pygame.draw.rect(finestra,"red", col4,1)

         #parte bassa stanza2
         collisione.append(pygame.Rect( (570*self.off,642*self.off,(876-570)*self.off,30*self.off) ))
         #pygame.draw.rect(finestra,"red", col41,1)

         #banco pc
         collisione.append(pygame.Rect( (816*self.off,270*self.off,(876-816)*self.off,(340-270)*self.off) ))
         #pygame.draw.rect(finestra,"red", col5,1)
         
         # pc
         collisione.append(pygame.Rect( (808*self.off,408*self.off,(876-808)*self.off,(504-408)*self.off) ))
         #pygame.draw.rect(finestra,"red", col6,1)

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
            
      elif self.tipost=="chimica1":

         collisione=[]

         #porta
         porta=pygame.Rect( (174.5*self.off,90.5*self.off,(246-174.5)*self.off,30*self.off) )
         #pygame.draw.rect(finestra,"red", porta,1)

         #parte alta stanza
         collisione.append(pygame.Rect((62.5*self.off,90.5*self.off,(1218.5-62.5)*self.off,30*self.off) ))
         #pygame.draw.rect(finestra,"red", col1,1)


         #teschio
         collisione.append(pygame.Rect((1046.5*self.off,120.5*self.off,(1102-1046.5)*self.off,(150-120.5)*self.off) ))
         #pygame.draw.rect(finestra,"red", col2,1)

         #sinistra
         collisione.append(pygame.Rect((32.5*self.off,120.5*self.off,30*self.off,(700-120.5)*self.off) ))
         #pygame.draw.rect(finestra,"red", col3,1)

         #destra
         collisione.append(pygame.Rect((1218.5*self.off,120.5*self.off,30*self.off,(700-120.5)*self.off) ))
         #pygame.draw.rect(finestra,"red", col4,1)

         #parte basso1
         collisione.append(pygame.Rect((62.5*self.off,690.5*self.off,(1038.5-62.5)*self.off,30*self.off) ))
         #pygame.draw.rect(finestra,"red", col5,1)

         #parte basso2
         collisione.append(pygame.Rect((1106.5*self.off,690.5*self.off,(1218.5-1106.5)*self.off,30*self.off) ))
         #pygame.draw.rect(finestra,"red", col51,1)

         #banco1
         collisione.append(pygame.Rect((258.5*self.off,312.5*self.off,(446.5-258.5)*self.off,(368.5-312.5)*self.off) ))
         #pygame.draw.rect(finestra,"red", col6,1)

         #banco2
         collisione.append(pygame.Rect((546.5*self.off,312.5*self.off,(188)*self.off,(56)*self.off) ))
         #pygame.draw.rect(finestra,"red", col7,1)

         #banco3
         collisione.append(pygame.Rect((830.5*self.off,312.5*self.off,(188)*self.off,(56)*self.off) ))
         #pygame.draw.rect(finestra,"red", col8,1)

         #banco4
         collisione.append(pygame.Rect((258.5*self.off,504.5*self.off,(188)*self.off,(56)*self.off) ))
         #pygame.draw.rect(finestra,"red", col9,1)

         #banco5
         collisione.append(pygame.Rect((546.5*self.off,504.5*self.off,(188)*self.off,(56)*self.off) ))
         #pygame.draw.rect(finestra,"red", col10,1)

         #banco6
         collisione.append(pygame.Rect((830.5*self.off,504.5*self.off,(188)*self.off,(56)*self.off) ))
         #pygame.draw.rect(finestra,"red", col11,1)

         #posto prof
         collisione.append(pygame.Rect((747.5*self.off,136.5*self.off,(822.5-747.5)*self.off,(196.5-136.5)*self.off) ))
         #pygame.draw.rect(finestra,"red", col12,1)

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
               self.tipost="chimica2"
               self.x=502.5
               self.y=556.5

      if self.oggAcido:
         ogg=pygame.image.load('screens/game/assets/AcidoC.png').convert()
         finestra.blit(ogg,(10,10))


      pygame.display.update()
      return self.x,self.y,self.tipost