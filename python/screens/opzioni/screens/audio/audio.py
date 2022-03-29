import pygame, sys


def audioScreen(finestra, musicaSottofondo, OFFSET_FINESTRA, FPS):
    # carico l'immagini 
    immagini = {
        'sfondoImg' : pygame.image.load('screens/opzioni/screens/audio/assets/sfondo.png'),
        "audioOnImgBtn": pygame.image.load("screens/opzioni/screens/audio/assets/audioOn.png"),
        "audioOnGsImgBtn": pygame.image.load("screens/opzioni/screens/audio/assets/audioOnGrayScale.png"),
        "audioOffImgBtn": pygame.image.load("screens/opzioni/screens/audio/assets/audioOff.png"),
        "audioOffGsImgBtn": pygame.image.load("screens/opzioni/screens/audio/assets/audioOffGrayScale.png"),
        "indietroBtnImg" : pygame.image.load("screens/opzioni/screens/audio/assets/indietro.png")
    }

    # ridimenziono le immagini rispetto alla dimenzione della finestra
    immagini = resizeImgs(immagini, OFFSET_FINESTRA)

    if musicaSottofondo.getMusicOn():
        audioOnImgBtnCorrente = immagini['audioOnImgBtn']
        audioOffImgBtnCorrente = immagini['audioOffGsImgBtn']
    else:
        audioOnImgBtnCorrente = immagini['audioOnGsImgBtn']
        audioOffImgBtnCorrente = immagini['audioOffImgBtn']

    while True:
        finestra.blit(immagini['sfondoImg'], (0,0))

        # catturo la posizione del mouse 
        posizioneMouse = pygame.mouse.get_pos()

        # creo e stampo sulla finestra la scritta "opzioni"
        opzioniTxt = getFont("forwardFont", int(50 * OFFSET_FINESTRA)).render("Audio", True, "#b68f40")
        finestra.blit(opzioniTxt, (int(100 * OFFSET_FINESTRA), int(50 * OFFSET_FINESTRA)))


        # creo il bottone: audio off 
        audioOnBtn =    imgBtn(
                            img = audioOnImgBtnCorrente, 
                            pos = (int(530 * OFFSET_FINESTRA), int(260 * OFFSET_FINESTRA)), 
                        )

        # creo il bottone: audio on
        audioOffBtn =   imgBtn(
                            img = audioOffImgBtnCorrente, 
                            pos = (int(750 * OFFSET_FINESTRA), int(260 * OFFSET_FINESTRA)), 
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

        for imgBottone in [audioOnBtn, audioOffBtn]:
            imgBottone.aggiorna(finestra)

        for bottone in [indietroBtn]:
            bottone.cambiaColoreTesto(posizioneMouse)
            bottone.aggiorna(finestra)


        # for per gestire gli eventi 
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                sys.exit()

            if event.type == pygame.MOUSEBUTTONDOWN:
                if audioOnBtn.controllaSeCliccato(posizioneMouse):
                    musicaSottofondo.playMusic()
                    audioOnImgBtnCorrente = immagini['audioOnImgBtn']
                    audioOffImgBtnCorrente = immagini['audioOffGsImgBtn']

                if audioOffBtn.controllaSeCliccato(posizioneMouse):
                    musicaSottofondo.stopMusic()
                    audioOnImgBtnCorrente = immagini['audioOnGsImgBtn']
                    audioOffImgBtnCorrente = immagini['audioOffImgBtn']
                    
                if indietroBtn.controllaSeCliccato(posizioneMouse):
                    opzioniScreen(finestra, musicaSottofondo, OFFSET_FINESTRA, FPS)   
        
        # aggiorno la finestra
        pygame.display.update()	
        pygame.time.Clock().tick(FPS)


# import delle resorse
from utilities.font import getFont
from utilities.btn import btn
from utilities.imgBtn import imgBtn
from utilities.resizeImgs import resizeImgs
from utilities.music import music


#import degli schermi
from screens.opzioni.opzioni import opzioniScreen
from screens.opzioni.screens.resoluzione.resoluzione import resoluzioneScreen