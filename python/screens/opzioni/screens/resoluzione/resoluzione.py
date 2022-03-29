import pygame

def resoluzioneScreen(finestra, musicaSottofondo, OFFSET_FINESTRA, FPS):
    # carico l'immagini 
    immagini = {
        'sfondoImg' : pygame.image.load('screens/opzioni/screens/resoluzione/assets/sfondo.png'),
        'resoluzione1BtnImg' : pygame.image.load("screens/opzioni/screens/resoluzione/assets/resoluzione1.png"),
        'resoluzione2BtnImg' : pygame.image.load("screens/opzioni/screens/resoluzione/assets/resoluzione2.png"),
        'resoluzione3BtnImg' : pygame.image.load("screens/opzioni/screens/resoluzione/assets/resoluzione3.png"),
        'indietroBtnImg' : pygame.image.load("screens/opzioni/screens/resoluzione/assets/indietro.png"),
    }    

    # ridimenziono le immagini rispetto alla dimenzione della finestra
    immagini = resizeImgs(immagini, OFFSET_FINESTRA)


    while True:
        finestra.blit(immagini['sfondoImg'], (0,0))
        
        # creo e stampo sulla finestra la scritta "opzioni"
        opzioniTxt = getFont("forwardFont", int(50 * OFFSET_FINESTRA)).render("Resoluzione", True, "#b68f40")
        finestra.blit(opzioniTxt, (int(100 * OFFSET_FINESTRA), int(50 * OFFSET_FINESTRA)))

        # catturo la posizione del mouse 
        posizioneMouse = pygame.mouse.get_pos()


        # creo il bottone: resoluzione1
        resoluzione1Btn =    btn(
                                img = immagini['resoluzione1BtnImg'], 
                                pos = (int(640 * OFFSET_FINESTRA), int(200 * OFFSET_FINESTRA)), 
                                txt = "1024 X 576", 
                                font = getFont("forwardFont", int(30 * OFFSET_FINESTRA)), 
                                coloreTxt = "#ffffff", 
                                coloreTxtHover = "#000000"
                            )

        # creo il bottone: resoluzione2
        resoluzione2Btn =    btn(
                                img = immagini['resoluzione2BtnImg'], 
                                pos = (int(640 * OFFSET_FINESTRA), int(320 * OFFSET_FINESTRA)), 
                                txt = "1280 X 720", 
                                font = getFont("forwardFont", int(30 * OFFSET_FINESTRA)), 
                                coloreTxt = "#ffffff", 
                                coloreTxtHover = "#000000"
                            )

        # creo il bottone: resoluzione3
        resoluzione3Btn =    btn(
                                img = immagini['resoluzione3BtnImg'], 
                                pos = (int(640 * OFFSET_FINESTRA), int(440 * OFFSET_FINESTRA)), 
                                txt = "1536 X 864", 
                                font = getFont("forwardFont", int(30 * OFFSET_FINESTRA)), 
                                coloreTxt = "#ffffff", 
                                coloreTxtHover = "#000000"
                            )


        # creo il bottone: indietro
        indietroBtn =   btn(
                            img = immagini['indietroBtnImg'], 
                            pos = (int(640 * OFFSET_FINESTRA), int(560 * OFFSET_FINESTRA)), 
                            txt = "INDIETRO", 
                            font = getFont("forwardFont", int(30 * OFFSET_FINESTRA)), 
                            coloreTxt = "#ffffff", 
                            coloreTxtHover = "#000000"
                        )
        

        # for per cambiare il colore del testo dei bottoni(hover) ed aggiornarlo 
        for bottone in [resoluzione1Btn, resoluzione2Btn, resoluzione3Btn, indietroBtn]:
            bottone.cambiaColoreTesto(posizioneMouse)
            bottone.aggiorna(finestra)

        # for per gestire gli eventi 
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()

            if event.type == pygame.MOUSEBUTTONDOWN:
                if resoluzione1Btn.controllaSeCliccato(posizioneMouse):
                    OFFSET_FINESTRA = 0.8 
                    finestra = pygame.display.set_mode((int(1280 * OFFSET_FINESTRA), int(720 * OFFSET_FINESTRA)))
                    immagini = resizeImgs(immagini, OFFSET_FINESTRA)  
                    menuScreen(finestra, musicaSottofondo, OFFSET_FINESTRA, FPS)

                if resoluzione2Btn.controllaSeCliccato(posizioneMouse):
                    OFFSET_FINESTRA = 1
                    finestra = pygame.display.set_mode((int(1280 * OFFSET_FINESTRA), int(720 * OFFSET_FINESTRA)))
                    immagini = resizeImgs(immagini, OFFSET_FINESTRA)  
                    menuScreen(finestra, musicaSottofondo, OFFSET_FINESTRA, FPS)

                if resoluzione3Btn.controllaSeCliccato(posizioneMouse):
                    OFFSET_FINESTRA = 1.2
                    finestra = pygame.display.set_mode((int(1280 * OFFSET_FINESTRA), int(720 * OFFSET_FINESTRA)))
                    immagini = resizeImgs(immagini, OFFSET_FINESTRA)  
                    menuScreen(finestra, musicaSottofondo, OFFSET_FINESTRA, FPS)

                if indietroBtn.controllaSeCliccato(posizioneMouse):
                    opzioniScreen(finestra, musicaSottofondo, OFFSET_FINESTRA, FPS)

   

        
        # aggiorno la finestra
        pygame.display.update()	
        pygame.time.Clock().tick(FPS)


#import delle resorse
from utilities.font import getFont
from utilities.btn import btn
from utilities.resizeImgs import resizeImgs

# importo gli schermi
from screens.menu.menu import menuScreen
from screens.opzioni.opzioni import opzioniScreen