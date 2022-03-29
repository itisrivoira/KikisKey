import pygame
import sys

#import delle resorse
from utilities.font import getFont
from utilities.btn import btn

def giocaScreen(finestra, musicaSottofondo, OFFSET_FINESTRA, FPS):

    immagini = {
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
            "kikiF7": pygame.image.load('screens/game/assets/kikiF7.png'),

        #immagini mappe ecc
            "EscMenu": pygame.image.load("screens/game/assets/kiki/EscMenu.png"),
            'esciBtnImg' : pygame.image.load("screens/menu/assets/esci.png")
            #"corridoio": pygame.image.load()
    }
    
    immagini = resizeImgs(immagini, OFFSET_FINESTRA)
    

    walkleft=[
            immagini["kikiS0"],
            immagini["kikiS1"],
            immagini["kikiS2"],
            immagini["kikiS3"],
            immagini["kikiS4"],
            immagini["kikiS5"],
            immagini["kikiS6"],
            immagini["kikiS7"]
            ]
    
    walkright=[
            immagini["kikiD0"],
            immagini["kikiD1"],
            immagini["kikiD2"],
            immagini["kikiD3"],
            immagini["kikiD4"],
            immagini["kikiD5"],
            immagini["kikiD6"],
            immagini["kikiD7"]
            ]

    walkup=[
            immagini["kikiR0"],
            immagini["kikiR1"],
            immagini["kikiR2"],
            immagini["kikiR3"],
            immagini["kikiR4"],
            immagini["kikiR5"],
            immagini["kikiR6"],
            immagini["kikiR7"]
            ]

    walkdown=[
            immagini["kikiF0"],
            immagini["kikiF1"],
            immagini["kikiF2"],
            immagini["kikiF3"],
            immagini["kikiF4"],
            immagini["kikiF5"],
            immagini["kikiF6"],
            immagini["kikiF7"]
            ]

    kiki_x = 50*OFFSET_FINESTRA
    kiki_y = 50*OFFSET_FINESTRA
    speed = 5*OFFSET_FINESTRA
    kiki_left=False
    Kiki_right=False
    kiki_up=False
    kiki_down=False
    BtnExit=False
    global walkcount
    walkcount=0
    global kiki
    kiki=immagini["kikiF0"]
    global esciBtn

    def refresh():
        global walkcount
        global kiki
        
        
        if walkcount +1 >=FPS:
            walkcount=0
            
        if kiki_left:
             finestra.blit(walkleft[walkcount//8],(kiki_x,kiki_y))
             walkcount+=1
             kiki= walkleft[0]

        elif Kiki_right:
             finestra.blit(walkright[walkcount//8],(kiki_x,kiki_y))
             walkcount+=1
             kiki= walkright[0]

        elif kiki_up:
            finestra.blit(walkup[walkcount//8],(kiki_x,kiki_y))
            walkcount+=1
            kiki= walkup[0]

        elif kiki_down:
            finestra.blit(walkdown[walkcount//8],(kiki_x,kiki_y))
            walkcount+=1
            kiki= walkdown[0]
        
        elif BtnExit:
            finestra.blit(immagini["EscMenu"],(1280/2-200*OFFSET_FINESTRA,720/2-200*OFFSET_FINESTRA))

        else:
            finestra.blit(kiki,(kiki_x,kiki_y)) 

        pygame.display.update()	

    while True:
        
        finestra.fill("black")
        posizioneMouse = pygame.mouse.get_pos()

        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                sys.exit()

        # tasto schiacciato
        keys = pygame.key.get_pressed()  

        if keys[pygame.K_a]:
            kiki_x-=speed
            kiki_left=True
            Kiki_right=False
            kiki_up=False
            kiki_down=False
            BtnExit=False

        elif keys[pygame.K_d]:
            kiki_x+=speed
            kiki_left=False
            Kiki_right=True
            kiki_up=False
            kiki_down=False
            BtnExit=False
            
        elif keys[pygame.K_w]:
            kiki_y-=speed
            kiki_left=False
            Kiki_right=False
            kiki_up=True
            kiki_down=False
            BtnExit=False

        elif keys[pygame.K_s]:
            kiki_y+=speed
            kiki_left=False
            Kiki_right=False
            kiki_up=False
            kiki_down=True
            BtnExit=False

        elif keys[pygame.K_ESCAPE]:
            kiki_left=False
            Kiki_right=False
            kiki_up=False
            kiki_down=False
            BtnExit=True
            walkcount=0

        else:
            kiki_left=False
            Kiki_right=False
            kiki_up=False
            kiki_down=False
            walkcount=0

        # aggiorno la finestra
        refresh()
        pygame.time.Clock().tick(FPS)

from utilities.resizeImgs import resizeImgs