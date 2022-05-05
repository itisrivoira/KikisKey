import pygame

def collisioni(tipost,offset):


   if tipost=="chimica2" :

      collisione=[]
            
      #parte alta stanza
      collisione.append(pygame.Rect((392*offset,134*offset,(872.3-392)*offset,30*offset) ))
      #pygame.draw.rect(finestra,"red", col1,1)

      #parte sinistra stanza
      collisione.append(pygame.Rect((362*offset,164*offset,30*offset,(651-164)*offset) ))
      #pygame.draw.rect(finestra,"red", col2,1)

      #parte destra stanza
      collisione.append(pygame.Rect((876*offset,164*offset,30*offset,(648-164)*offset) ))
      #pygame.draw.rect(finestra,"red", col3,1)

      #parte bassa stanza1
      collisione.append(pygame.Rect((392*offset,642*offset,(504-392)*offset,30*offset) ))
      #pygame.draw.rect(finestra,"red", col4,1)

      #parte bassa stanza2
      collisione.append(pygame.Rect( (570*offset,642*offset,(876-570)*offset,30*offset) ))
      #pygame.draw.rect(finestra,"red", col41,1)

      #banco pc
      collisione.append(pygame.Rect( (816*offset,270*offset,(876-816)*offset,(340-270)*offset) ))
      #pygame.draw.rect(finestra,"red", col5,1)
            
      # pc
      collisione.append(pygame.Rect( (808*offset,408*offset,(876-808)*offset,(504-408)*offset) ))
      #pygame.draw.rect(finestra,"red", col6,1)


   elif tipost=="chimica1":

      collisione=[]

      #parte alta stanza
      collisione.append(pygame.Rect((62.5*offset,90.5*offset,(1218.5-62.5)*offset,30*offset) ))
      #pygame.draw.rect(finestra,"red", col1,1)

      #teschio
      collisione.append(pygame.Rect((1046.5*offset,120.5*offset,(1102-1046.5)*offset,(150-120.5)*offset) ))
      #pygame.draw.rect(finestra,"red", col2,1)

      #sinistra parte 1
      collisione.append(pygame.Rect((32.5*offset,120.5*offset,30*offset,(516.5-120.5)*offset) ))
      #pygame.draw.rect(finestra,"red", col31,1)

      #sinistra parte 2
      collisione.append(pygame.Rect((32.5*offset,584.5*offset,30*offset,(700-584.5)*offset) ))         
      #pygame.draw.rect(finestra,"red", col3,1)

      #destra
      collisione.append(pygame.Rect((1218.5*offset,120.5*offset,30*offset,(700-120.5)*offset) ))
      #pygame.draw.rect(finestra,"red", col4,1)

      #parte basso
      collisione.append(pygame.Rect((62.5*offset,690.5*offset,(1218.5-62.5)*offset,30*offset) ))
      #pygame.draw.rect(finestra,"red", col5,1)

      #banco1
      collisione.append(pygame.Rect((258.5*offset,312.5*offset,(446.5-258.5)*offset,(368.5-312.5)*offset) ))
      #pygame.draw.rect(finestra,"red", col6,1)

      #banco2
      collisione.append(pygame.Rect((546.5*offset,312.5*offset,(188)*offset,(56)*offset) ))
      #pygame.draw.rect(finestra,"red", col7,1)

      #banco3
      collisione.append(pygame.Rect((830.5*offset,312.5*offset,(188)*offset,(56)*offset) ))
      #pygame.draw.rect(finestra,"red", col8,1)

      #banco4
      collisione.append(pygame.Rect((258.5*offset,504.5*offset,(188)*offset,(56)*offset) ))
      #pygame.draw.rect(finestra,"red", col9,1)

      #banco5
      collisione.append(pygame.Rect((546.5*offset,504.5*offset,(188)*offset,(56)*offset) ))
      #pygame.draw.rect(finestra,"red", col10,1)

      #banco6
      collisione.append(pygame.Rect((830.5*offset,504.5*offset,(188)*offset,(56)*offset) ))
      #pygame.draw.rect(finestra,"red", col11,1)

      #posto prof
      collisione.append(pygame.Rect((734.5*offset,136.5*offset,(830.5-734.5)*offset,(196.5-136.5)*offset) ))
      #pygame.draw.rect(finestra,"red", col12,1)

   
   if tipost=="bidelleriaFuori" :

      collisione=[]
            
      #parte alta stanza
      #collisione.append(pygame.Rect((392*offset,134*offset,(872.3-392)*offset,30*offset) ))
      #pygame.draw.rect(finestra,"red", col1,1)



   return collisione