from ast import And
import pygame
import sys

#import delle resorse
from utilities.font import getFont
from utilities.btn import btn
from utilities.stanza import stanza
from utilities.player import player

def giocaScreen(finestra, musicaSottofondo, OFFSET_FINESTRA, FPS):

    immaginiP = {
        #immagine kiki camminata  a sinistra
            "kikiS0": pygame.image.load('screens/game/assets/kikiS0.png'),
            "kikiS1": pygame.image.load('screens/game/assets/kikiS1.png'),
            "kikiS2": pygame.image.load('screens/game/assets/kikiS2.png'),
            "kikiS3": pygame.image.load('screens/game/assets/kikiS3.png'),
            "kikiS4": pygame.image.load('screens/game/assets/kikiS4.png'),
            "kikiS5": pygame.image.load('screens/game/assets/kikiS5.png'),
            "kikiS6": pygame.image.load('screens/game/assets/kikiS6.png'),
            "kikiS7": pygame.image.load('screens/game/assets/kikiS7.png'),

        #immagine kiki camminata a destra
            "kikiD0": pygame.image.load('screens/game/assets/kikiD0.png'),
            "kikiD1": pygame.image.load('screens/game/assets/kikiD1.png'),
            "kikiD2": pygame.image.load('screens/game/assets/kikiD2.png'),
            "kikiD3": pygame.image.load('screens/game/assets/kikiD3.png'),
            "kikiD4": pygame.image.load('screens/game/assets/kikiD4.png'),
            "kikiD5": pygame.image.load('screens/game/assets/kikiD5.png'),
            "kikiD6": pygame.image.load('screens/game/assets/kikiD6.png'),
            "kikiD7": pygame.image.load('screens/game/assets/kikiD7.png'),

        #immagine kiki camminata di spalle
            "kikiR0": pygame.image.load('screens/game/assets/kikiR0.png'),
            "kikiR1": pygame.image.load('screens/game/assets/kikiR1.png'),
            "kikiR2": pygame.image.load('screens/game/assets/kikiR2.png'),
            "kikiR3": pygame.image.load('screens/game/assets/kikiR3.png'),
            "kikiR4": pygame.image.load('screens/game/assets/kikiR4.png'),
            "kikiR5": pygame.image.load('screens/game/assets/kikiR5.png'),
            "kikiR6": pygame.image.load('screens/game/assets/kikiR6.png'),
            "kikiR7": pygame.image.load('screens/game/assets/kikiR7.png'),

        #immagine kiki camminata davanti
            "kikiF0": pygame.image.load('screens/game/assets/kikiF0.png'),
            "kikiF1": pygame.image.load('screens/game/assets/kikiF1.png'),
            "kikiF2": pygame.image.load('screens/game/assets/kikiF2.png'),
            "kikiF3": pygame.image.load('screens/game/assets/kikiF3.png'),
            "kikiF4": pygame.image.load('screens/game/assets/kikiF4.png'),
            "kikiF5": pygame.image.load('screens/game/assets/kikiF5.png'),
            "kikiF6": pygame.image.load('screens/game/assets/kikiF6.png'),
            "kikiF7": pygame.image.load('screens/game/assets/kikiF7.png')
    }

    immagini={
        "chimica2": pygame.image.load("screens/game/assets/stanze/chimica2.png"),
        "chimica1": pygame.image.load("screens/game/assets/stanze/chimica1.png"),
        "bidelleriaFuori": pygame.image.load("screens/game/assets/stanze/bidelleriaFuori.png"),
        "bidelleriaFuori2": pygame.image.load("screens/game/assets/stanze/bidelleriaFuori2.png"),
        "bidelleria": pygame.image.load("screens/game/assets/stanze/bidelleria.png"),
        "biblioteca": pygame.image.load("screens/game/assets/stanze/biblioteca.png")
    }

    inventario={
        "inventario": pygame.image.load("screens/game/assets/inventarioBox.png")
    }

    oggetti={
        "acido":pygame.image.load('screens/game/assets/item/acido.png'),
        "moneta":pygame.image.load('screens/game/assets/item/moneta.png'),
        "merendina":pygame.image.load('screens/game/assets/item/merendina.png'),
        "martello":pygame.image.load('screens/game/assets/item/martello.png')
    }

    tipostanza="chimica1"
    immaginiP = resizeImgs(immaginiP, OFFSET_FINESTRA,1.1) #l'ultimo valore moltiplicatore grandezza immagine
    immagini = resizeImgs(immagini, OFFSET_FINESTRA,3)
    inventario = resizeImgs(inventario, OFFSET_FINESTRA,4.5)
    oggetti = resizeImgs(oggetti, OFFSET_FINESTRA,2)
    
    #inizializzo le variabili per il personaggio
    x=1106.5*OFFSET_FINESTRA
    y=120.5*OFFSET_FINESTRA
    walkcount=0
    
    
    speed=5*OFFSET_FINESTRA
    kiki=player(immaginiP,OFFSET_FINESTRA,x,y,FPS,speed,walkcount)
    inventarioImg=stanza(inventario["inventario"],OFFSET_FINESTRA)
    attivaInv=False


    clock = pygame.time.Clock()
    
    while True:
        stanzaIMGconv=immagini[tipostanza].convert() #converte l'immagine in un formato piu veloce
        stanzaIMG=stanza(stanzaIMGconv,OFFSET_FINESTRA)
        keys = pygame.key.get_pressed()

        if keys[pygame.K_a] and attivaInv==False:
            x-=speed*OFFSET_FINESTRA
            left=True
            right=False
            up=False
            down=False

        elif keys[pygame.K_d] and attivaInv==False:
            x+=speed*OFFSET_FINESTRA
            left=False
            right=True
            up=False
            down=False
            
        elif keys[pygame.K_w] and attivaInv==False:
            y-=speed*OFFSET_FINESTRA
            left=False
            right=False
            up=True
            down=False

        elif keys[pygame.K_s] and attivaInv==False:
            y+=speed*OFFSET_FINESTRA
            left=False
            right=False
            up=False
            down=True
            
        else:
            left=False
            right=False
            up=False
            down=False
            walkcount=0

        if keys[pygame.K_e]:
            key=True
        else:
            key=False

        if keys[pygame.K_f]:
            attivaInv=True
        elif keys[pygame.K_ESCAPE]:
            attivaInv=False

        finestra.fill("black")       
        stanzaIMG.aggsfondo(finestra)
        x,y,tipostanza=kiki.aggplayer(finestra,left,right,up,down,y,x,tipostanza,key,attivaInv,inventarioImg,oggetti)
        

        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                sys.exit()
        

        # aggiorno la finestra
        pygame.display.update()
        clock.tick(FPS)

        #print(clock.get_fps())

from utilities.resizeImgs import resizeImgs
