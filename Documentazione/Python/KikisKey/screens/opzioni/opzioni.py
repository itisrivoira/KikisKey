import pygame, sys


# definisco la funzione per la creazione dello schermo opzioni
def opzioniScreen(finestra, musicaSottofondo, OFFSET_FINESTRA, FPS):
    # carico l'immagini 
    immagini = {
        'sfondoImg' : pygame.image.load('screens/opzioni/assets/sfondo.png'),
        'resoluzioneBtnImg' : pygame.image.load("screens/opzioni/assets/resoluzione.png"),
        'audioBtnImg' : pygame.image.load("screens/opzioni/assets/audio.png"),
        'indietroBtnImg' : pygame.image.load("screens/opzioni/assets/indietro.png"),
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

        # creo il bottone: audio
        audioBtn =    btn(
                            img = immagini['audioBtnImg'], 
                            pos = (int(640 * OFFSET_FINESTRA), int(330 * OFFSET_FINESTRA)), 
                            txt = "AUDIO", 
                            font = getFont("forwardFont", int(30 * OFFSET_FINESTRA)), 
                            coloreTxt = "#ffffff", 
                            coloreTxtHover = "#000000"
                        )

        # creo il bottone: indietro
        indietroBtn =   btn(
                            img = immagini['indietroBtnImg'], 
                            pos = (int(640 * OFFSET_FINESTRA), int(460 * OFFSET_FINESTRA)), 
                            txt = "INDIETRO", 
                            font = getFont("forwardFont", int(30 * OFFSET_FINESTRA)), 
                            coloreTxt = "#ffffff", 
                            coloreTxtHover = "#000000"
                        )

        # for per cambiare il colore del testo dei bottoni(hover) ed aggiornarlo 
        for bottone in [resoluzioneBtn, audioBtn, indietroBtn]:
            bottone.cambiaColoreTesto(posizioneMouse)
            bottone.aggiorna(finestra)

        # for per gestire gli eventi 
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                sys.exit()

            if event.type == pygame.MOUSEBUTTONDOWN:
                if resoluzioneBtn.controllaSeCliccato(posizioneMouse):
                    resoluzioneScreen(finestra, musicaSottofondo, OFFSET_FINESTRA, FPS)

                if audioBtn.controllaSeCliccato(posizioneMouse):
                    audioScreen(finestra, musicaSottofondo, OFFSET_FINESTRA, FPS)

                if indietroBtn.controllaSeCliccato(posizioneMouse):
                    menuScreen(finestra, musicaSottofondo, OFFSET_FINESTRA, FPS)   
        
        # aggiorno la finestra
        pygame.display.update()	
        pygame.time.Clock().tick(FPS)


# importo gli schermi
from utilities.font import getFont
from utilities.btn import btn
from utilities.resizeImgs import resizeImgs


# importo le riscorse
from screens.opzioni.screens.resoluzione.resoluzione import resoluzioneScreen
from screens.opzioni.screens.audio.audio import audioScreen
from screens.menu.menu import menuScreen