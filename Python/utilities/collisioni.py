import pygame

def collisioni(tipost,offset,finestra):


   if tipost=="chimica2" :

      collisione=[]
            
      #parte alta stanza
      collisione.append(pygame.Rect((392*offset,134*offset,(872.3-392)*offset,30*offset) ))
      #pygame.draw.rect(finestra,"red", collisione[0],1)

      #parte sinistra stanza
      collisione.append(pygame.Rect((362*offset,164*offset,30*offset,(651-164)*offset) ))
      #pygame.draw.rect(finestra,"red", collisione[1],1)

      #parte destra stanza
      collisione.append(pygame.Rect((876*offset,164*offset,30*offset,(648-164)*offset) ))
      #pygame.draw.rect(finestra,"red", collisione[2],1)

      #parte bassa stanza1
      collisione.append(pygame.Rect((392*offset,642*offset,(504-392)*offset,30*offset) ))
      #pygame.draw.rect(finestra,"red", collisione[3],1)

      #parte bassa stanza2
      collisione.append(pygame.Rect( (570*offset,642*offset,(876-570)*offset,30*offset) ))
      #pygame.draw.rect(finestra,"red", collisione[4],1)

      #banco pc
      collisione.append(pygame.Rect( (816*offset,270*offset,(876-816)*offset,(340-270)*offset) ))
      #pygame.draw.rect(finestra,"red", collisione[5],1)
            
      # pc
      collisione.append(pygame.Rect( (808*offset,408*offset,(876-808)*offset,(504-408)*offset) ))
      #pygame.draw.rect(finestra,"red", collisione[6],1)


   elif tipost=="chimica1":

      collisione=[]

      #parte alta stanza
      collisione.append(pygame.Rect((62.5*offset,90.5*offset,(1218.5-62.5)*offset,30*offset) ))
      #pygame.draw.rect(finestra,"red", collisione[0],1)

      #teschio
      collisione.append(pygame.Rect((1046.5*offset,120.5*offset,(1102-1046.5)*offset,(150-120.5)*offset) ))
      #pygame.draw.rect(finestra,"red", collisione[1],1)

      #sinistra parte 1
      collisione.append(pygame.Rect((29.5*offset,120.5*offset,30*offset,(516.5-120.5)*offset) ))
      pygame.draw.rect(finestra,"red", collisione[2],1)

      #sinistra parte 2
      collisione.append(pygame.Rect((29.5*offset,584.5*offset,30*offset,(700-584.5)*offset) ))         
      pygame.draw.rect(finestra,"red", collisione[3],1)

      #destra
      collisione.append(pygame.Rect((1218.5*offset,120.5*offset,30*offset,(700-120.5)*offset) ))
      #pygame.draw.rect(finestra,"red", collisione[4],1)

      #parte basso
      collisione.append(pygame.Rect((62.5*offset,690.5*offset,(1218.5-62.5)*offset,30*offset) ))
      #pygame.draw.rect(finestra,"red", collisione[5],1)

      #banco1
      collisione.append(pygame.Rect((258.5*offset,312.5*offset,(446.5-258.5)*offset,(368.5-312.5)*offset) ))
      #pygame.draw.rect(finestra,"red", collisione[6],1)

      #banco2
      collisione.append(pygame.Rect((546.5*offset,312.5*offset,(188)*offset,(56)*offset) ))
      #pygame.draw.rect(finestra,"red", collisione[7],1)

      #banco3
      collisione.append(pygame.Rect((830.5*offset,312.5*offset,(188)*offset,(56)*offset) ))
      #pygame.draw.rect(finestra,"red", collisione[8],1)

      #banco4
      collisione.append(pygame.Rect((258.5*offset,504.5*offset,(188)*offset,(56)*offset) ))
      #pygame.draw.rect(finestra,"red", collisione[9],1)

      #banco5
      collisione.append(pygame.Rect((546.5*offset,504.5*offset,(188)*offset,(56)*offset) ))
      #pygame.draw.rect(finestra,"red", collisione[10],1)

      #banco6
      collisione.append(pygame.Rect((830.5*offset,504.5*offset,(188)*offset,(56)*offset) ))
      #pygame.draw.rect(finestra,"red", collisione[11],1)

      #posto prof
      collisione.append(pygame.Rect((734.5*offset,136.5*offset,(830.5-734.5)*offset,(196.5-136.5)*offset) ))
      #pygame.draw.rect(finestra,"red", collisione[12],1)

      #porta dimenticata
      collisione.append(pygame.Rect(29.5*offset,516.5*offset,30*offset,(584.5-516.5)*offset))
   
   elif tipost=="bidelleriaFuori" or tipost=="bidelleriaFuori2" :

      collisione=[]
            
      #parte destra 1
      collisione.append(pygame.Rect((1218*offset,164*offset,30*offset,(468-164)*offset) ))
      #pygame.draw.rect(finestra,"red", collisione[0],1)

      #parte destra 2
      collisione.append(pygame.Rect((1218*offset,540*offset,30*offset,(652-540)*offset) ))
      #pygame.draw.rect(finestra,"red", collisione[1],1)

      #parte bassa
      collisione.append(pygame.Rect((62.5*offset,652*offset,(1214.5-62.5)*offset,30*offset) ))
      #pygame.draw.rect(finestra,"red", collisione[2],1)

      #parte sinistra verso porta biblioteca 1
      collisione.append(pygame.Rect((32.5*offset,356.5*offset,30*offset,(464.5-356.5)*offset) ))
      #pygame.draw.rect(finestra,"red", collisione[3],1)

      #parte sinistra verso porta biblioteca 2
      collisione.append(pygame.Rect((32.5*offset,544.5*offset,30*offset,(648.5-544.5)*offset) ))
      #pygame.draw.rect(finestra,"red", collisione[4],1)

      #parte alta verso porta biblioteca 
      collisione.append(pygame.Rect((62.5*offset,326.5*offset,(830.5-62.5)*offset,30*offset) ))
      #pygame.draw.rect(finestra,"red", collisione[5],1)

      #parte sinistra verso porta bidelleria 
      collisione.append(pygame.Rect((800.5*offset,164.5*offset,30*offset,(326.5-164.5)*offset) ))
      #pygame.draw.rect(finestra,"red", collisione[6],1)

      #parte alta verso porta bidelleria 
      collisione.append(pygame.Rect((830.5*offset,134.5*offset,(1236.5-830.5)*offset,30*offset) ))
      #pygame.draw.rect(finestra,"red", collisione[7],1)

      #personaggio misterioso
      collisione.append(pygame.Rect( (1142.5*offset,164.5*offset,(1190.5-1142.5)*offset,(192.5-164.5)*offset) ))

   elif tipost=="bidelleria":

      collisione=[]

      #collsione casuale per provare da eliminare
      collisione.append(pygame.Rect( (1142.5*offset,164.5*offset,(1190.5-1142.5)*offset,(192.5-164.5)*offset) ))
      pygame.draw.rect(finestra,"red", collisione[0],1) 
      
   return collisione