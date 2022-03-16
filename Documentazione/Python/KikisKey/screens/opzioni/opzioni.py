import pygame
import sys
from utilities.musica import playMusic, stop

# definisco la funzione per la creazione dello schermo opzioni
def opzioniScreen(finestra, OFFSET_FINESTRA, FPS):
    # carico l'immagini 
    immagini = {
        'sfondoImg' : pygame.image.load('screens/menu/assets/sfondo.png'),
        'resoluzioneBtnImg' : pygame.image.load("screens/opzioni/assets/resoluzione.png"),
        'indietroBtnImg' : pygame.image.load("screens/opzioni/assets/indietro.png"),
        "volume": pygame.image.load("screens/opzioni/assets/volume.png"),
        "noVolume": pygame.image.load("screens/opzioni/assets/novolume.png"),
        "noVolumeH": pygame.image.load("screens/opzioni/assets/novolumeH.png"),
        "volumeH": pygame.image.load("screens/opzioni/assets/volumeH.png")
    }

    # ridimenziono le immagini rispetto alla dimenzione della finestra
    immagini = resizeImgs(immagini, OFFSET_FINESTRA)



    while True:
        finestra.blit(immagini['sfondoImg'], (0,0))

        # catturo la posizione del mouse 
        posizioneMouse = pygame.mouse.get_pos()

        # creo e stampo sulla finestra la scritta "opzioni"
        opzioniTxt = getFont("forwardFont", int(50 * OFFSET_FINESTRA)).render("Opzioni", True, "#b68f40")
        finestra.blit(opzioniTxt, (int(100 * OFFSET_FINESTRA), int(50 * OFFSET_FINESTRA)))

        # creo il bottone: resoluzione
        resoluzioneBtn =    btn(
                                img = immagini['resoluzioneBtnImg'], 
                                pos = (int(640 * OFFSET_FINESTRA), int(200 * OFFSET_FINESTRA)), 
                                txt = "RISOLUZ.", 
                                font = getFont("forwardFont", int(30 * OFFSET_FINESTRA)), 
                                coloreTxt = "#ffffff", 
                                coloreTxtHover = "#000000"
                            )

        # creo il bottone: musicaSi & musicaNo
        musicaPBtn =   btnimg(
                            img = immagini['volume'], 
                            pos = (int(560 * OFFSET_FINESTRA), int(400 * OFFSET_FINESTRA)), 
                            imgNotHover=immagini['volume'],
                            imgHover=immagini['volumeH']
                        )
        musicaSBtn =   btnimg(
                            img = immagini['noVolume'], 
                            pos = (int(820 * OFFSET_FINESTRA), int(400 * OFFSET_FINESTRA)), 
                            imgNotHover=immagini['noVolume'],
                            imgHover=immagini['noVolumeH']
                        )

        # creo il bottone: indietro
        indietroBtn =   btn(
                            img = immagini['indietroBtnImg'], 
                            pos = (int(640 * OFFSET_FINESTRA), int(510 * OFFSET_FINESTRA)), 
                            txt = "INDIETRO", 
                            font = getFont("forwardFont", int(30 * OFFSET_FINESTRA)), 
                            coloreTxt = "#ffffff", 
                            coloreTxtHover = "#000000"
                        )

        # for per cambiare il colore del testo dei bottoni(hover) ed aggiornarlo 
        for bottone in [resoluzioneBtn, indietroBtn]:
            bottone.cambiaColoreTesto(posizioneMouse)
            bottone.aggiorna(finestra)

        for bottoneImg in [musicaPBtn,musicaSBtn]:
            bottoneImg.cambiaColoreImg(posizioneMouse)
            bottoneImg.aggiornaI(OFFSET_FINESTRA,finestra)

        # for per gestire gli eventi 
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                sys.exit()

            if event.type == pygame.MOUSEBUTTONDOWN:
                if resoluzioneBtn.controllaSeCliccato(posizioneMouse):
                    resoluzioneScreen(finestra, OFFSET_FINESTRA, FPS)

                if musicaPBtn.controllaSeCliccatoI(posizioneMouse):
                    playMusic()            

                if musicaSBtn.controllaSeCliccatoI(posizioneMouse):
                    stop()
                    

                if indietroBtn.controllaSeCliccato(posizioneMouse):
                    menuScreen(finestra, OFFSET_FINESTRA, FPS)   
        
        # aggiorno la finestra
        pygame.display.update()	
        pygame.time.Clock().tick(FPS)


# import delle resorse
from utilities.font import getFont
from utilities.btn import btn
from utilities.btnimg import btnimg
from utilities.resizeImgs import resizeImgs

#import degli schermi
from screens.opzioni.screens.resoluzione.resoluzione import resoluzioneScreen
from screens.menu.menu import menuScreen