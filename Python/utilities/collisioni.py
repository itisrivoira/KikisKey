import pygame

def collisioni(tipost,offset,finestra):


   if tipost=="chimica2" :

      collisione=[]
            
      #parte alta stanza
      collisione.append(pygame.Rect((394*offset,134*offset,(872.3-390)*offset,30*offset) ))
      #pygame.draw.rect(finestra,"red", collisione[0],1)

      #parte sinistra stanza
      collisione.append(pygame.Rect((366*offset,164*offset,30*offset,(651-164)*offset) ))
      #pygame.draw.rect(finestra,"red", collisione[1],1)

      #parte destra stanza
      collisione.append(pygame.Rect((880*offset,164*offset,30*offset,(648-164)*offset) ))
      #pygame.draw.rect(finestra,"red", collisione[2],1)

      #parte bassa stanza1
      collisione.append(pygame.Rect((396*offset,642*offset,(504-392)*offset,30*offset) ))
      #pygame.draw.rect(finestra,"red", collisione[3],1)

      #parte bassa stanza2
      collisione.append(pygame.Rect( (574*offset,642*offset,(876-570)*offset,30*offset) ))
      #pygame.draw.rect(finestra,"red", collisione[4],1)

      #banco pc
      collisione.append(pygame.Rect( (820*offset,270*offset,(876-816)*offset,(340-270)*offset) ))
      #pygame.draw.rect(finestra,"red", collisione[5],1)
            
      # pc
      collisione.append(pygame.Rect( (812*offset,408*offset,(876-810)*offset,(504-408)*offset) ))
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
      #pygame.draw.rect(finestra,"red", collisione[2],1)

      #sinistra parte 2
      collisione.append(pygame.Rect((29.5*offset,584.5*offset,30*offset,(700-584.5)*offset) ))         
      #pygame.draw.rect(finestra,"red", collisione[3],1)

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
   
   elif tipost=="corridoio" or tipost=="corridoio2" :

      collisione=[]
            
      #parte destra 1
      collisione.append(pygame.Rect((1218*offset,164*offset,30*offset,(468-164)*offset) ))
      #pygame.draw.rect(finestra,"red", collisione[0],1)

      #parte destra 2
      collisione.append(pygame.Rect((1218*offset,540*offset,30*offset,(652-540)*offset) ))
      #pygame.draw.rect(finestra,"red", collisione[1],1)

      #parte bassa
      collisione.append(pygame.Rect((62.5*offset,646*offset,(1214.5-62.5)*offset,30*offset) ))
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

      #collsione parte alta
      collisione.append(pygame.Rect( (14.5*offset,138.5*offset,(1262.5-14.5)*offset,30*offset) ))
      #pygame.draw.rect(finestra,"red", collisione[0],1)

      #collsione parte destra
      collisione.append(pygame.Rect( (1262.5*offset,164.5*offset,30*offset,(460.5-164.5)*offset) ))
      #pygame.draw.rect(finestra,"red", collisione[1],1)

      #collsione parte destra bassa finta porta
      collisione.append(pygame.Rect( (882.5*offset,452.5*offset,(1262.5-882.5)*offset,30*offset) ))
      #pygame.draw.rect(finestra,"red", collisione[2],1)

      #collsione parte destra molto bassa
      collisione.append(pygame.Rect( (882.5*offset,448.5*offset,30*offset,(652.5-448.5)*offset) ))
      #pygame.draw.rect(finestra,"red", collisione[3],1)

      #collsione parte bassa
      collisione.append(pygame.Rect( (10.5*offset,648.5*offset,(882.5-10.5)*offset,30*offset) ))
      #pygame.draw.rect(finestra,"red", collisione[4],1)

      #collsione parte sinistra
      collisione.append(pygame.Rect( (-16.5*offset,164.5*offset,30*offset,(648.5-164)*offset) ))
      #pygame.draw.rect(finestra,"red", collisione[5],1)

      #collsione parte sinistra
      collisione.append(pygame.Rect( (-20.5*offset,164.5*offset,30*offset,(648.5-164)*offset) ))
      #pygame.draw.rect(finestra,"red", collisione[6],1)

      #collsione parte scrivanie
      collisione.append(pygame.Rect( (106.5*offset,282.5*offset,(400.5-106.5)*offset,(410.5-282.5)*offset) ))
      #pygame.draw.rect(finestra,"red", collisione[7],1)

      #collsione sedia1
      collisione.append(pygame.Rect( (142.5*offset,262.5*offset,(174.5-142.5)*offset,(430.5-262.5)*offset) ))
      #pygame.draw.rect(finestra,"red", collisione[8],1)

      #collsione sedia2
      collisione.append(pygame.Rect( (238.5*offset,262.5*offset,(174.5-142.5)*offset,(430.5-262.5)*offset) ))
      #pygame.draw.rect(finestra,"red", collisione[9],1)

      #collsione sedia3
      collisione.append(pygame.Rect( (334.5*offset,262.5*offset,(174.5-142.5)*offset,(430.5-262.5)*offset) ))
      #pygame.draw.rect(finestra,"red", collisione[10],1)

      #collsione pc
      collisione.append(pygame.Rect( (1068.5*offset,306.5*offset,(1168.5-1068.5)*offset,(416.5-306.5)*offset) ))
      #pygame.draw.rect(finestra,"red", collisione[11],1)

      #collsione pianta
      collisione.append(pygame.Rect( (1198.5*offset,169.5*offset,(1230.5-1198.5)*offset,(201.5-169.5)*offset) ))
      #pygame.draw.rect(finestra,"red", collisione[12],1)



   elif tipost=="biblioteca":

      collisione=[]

      #collsione banchi
      collisione.append(pygame.Rect( (170.5*offset,236.5*offset,(338.5-170.5)*offset,(384.5-236.5)*offset) ))
      #pygame.draw.rect(finestra,"red", collisione[0],1)

      #collsione libreria1
      collisione.append(pygame.Rect( (446.5*offset,210.5*offset,(1022.5-446.5)*offset,(312.5-210.5)*offset) ))
      #pygame.draw.rect(finestra,"red", collisione[1],1)

      #collsione libreria2
      collisione.append(pygame.Rect( (446.5*offset,403.5*offset,(1022.5-446.5)*offset,(102)*offset) ))
      #pygame.draw.rect(finestra,"red", collisione[2],1)

      #collsione parte alta
      collisione.append(pygame.Rect( (62.5*offset,90.5*offset,(1217.5-62.5)*offset,30*offset) ))
      #pygame.draw.rect(finestra,"red", collisione[3],1) 

      #collsione parte destra
      collisione.append(pygame.Rect( (1217.5*offset,90.5*offset,30*offset,(699.5-90.5)*offset) ))
      #pygame.draw.rect(finestra,"red", collisione[4],1)

      #collsione parte sinistra
      collisione.append(pygame.Rect( (32.5*offset,90.5*offset,30*offset,(699.5-90.5)*offset) ))
      #pygame.draw.rect(finestra,"red", collisione[5],1)

      #collsione parte bassa
      collisione.append(pygame.Rect( (62.5*offset,693.5*offset,(1217.5-62.5)*offset,30*offset) ))
      #pygame.draw.rect(finestra,"red", collisione[6],1)

      #collsione pc
      collisione.append(pygame.Rect( (161.5*offset,554.5*offset,(255.5-161.5)*offset,(659.5-554.5)*offset) ))
      #pygame.draw.rect(finestra,"red", collisione[7],1)

      #collsione sedia1
      collisione.append(pygame.Rect( (182.5*offset,216.5*offset,(230.5-182.5)*offset,(392.5-216.5)*offset) ))
      #pygame.draw.rect(finestra,"red", collisione[8],1) 

      #collsione sedia2
      collisione.append(pygame.Rect( (278.5*offset,216.5*offset,(230.5-182.5)*offset,(392.5-216.5)*offset) ))
      #pygame.draw.rect(finestra,"red", collisione[9],1)

   
   elif tipost=="ascensore" or tipost=="ascensore2":
      
      collisione=[]
      
      #collsione parte alta
      collisione.append(pygame.Rect( (401.5*offset,138.5*offset,(877.5-401.5)*offset,30*offset) ))
      #pygame.draw.rect(finestra,"red", collisione[0],1)

      #collsione parte destra
      collisione.append(pygame.Rect( (877.5*offset,168.5*offset,30*offset,(544.5-168.5)*offset) ))
      #pygame.draw.rect(finestra,"red", collisione[1],1)

      #collsione parte sinistra
      collisione.append(pygame.Rect( (371.5*offset,168.5*offset,30*offset,(544.5-168.5)*offset) ))
      #pygame.draw.rect(finestra,"red", collisione[2],1)

      #collsione parte bassa
      collisione.append(pygame.Rect( (401.5*offset,547.5*offset,(877.5-401.5)*offset,30*offset) ))
      #pygame.draw.rect(finestra,"red", collisione[3],1)


   elif tipost=="boss":

      collisione=[]

      #collsione parte alta
      collisione.append(pygame.Rect( (62.5*offset,86.5*offset,(1218.5-62.5)*offset,30*offset) ))
      #pygame.draw.rect(finestra,"red", collisione[0],1)

      #collsione parte destra
      collisione.append(pygame.Rect( (1218.5*offset,86.5*offset,30*offset,(696.5-86.5)*offset) ))
      #pygame.draw.rect(finestra,"red", collisione[1],1)

      #collsione parte sinistra
      collisione.append(pygame.Rect( (32.5*offset,86.5*offset,30*offset,(696.5-86.5)*offset) ))
      #pygame.draw.rect(finestra,"red", collisione[2],1)

      #collsione parte bassa
      collisione.append(pygame.Rect( (62.5*offset,690.5*offset,(1218.5-62.5)*offset,30*offset) ))
      #pygame.draw.rect(finestra,"red", collisione[3],1)

      #non puo arrivare al boss
      collisione.append(pygame.Rect( (62.5*offset,270*offset,(1218.5-62.5)*offset,30*offset) ))

      
   return collisione