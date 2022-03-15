import pygame

# definisco la funzione per la creazione del menu di gioco 
def menuScreen(finestra, OFFSET_FINESTRA, FPS):
    # carico l'immagini 
    immagini = {
        'sfondoImg' : pygame.image.load('screens/menu/assets/sfondo.png'),
        'giocaBtnImg' : pygame.image.load("screens/menu/assets/gioca.png"),
        'opzioniBtnImg' : pygame.image.load("screens/menu/assets/opzioni.png"),
        'esciBtnImg' : pygame.image.load("screens/menu/assets/esci.png"),
        "miniSfondo":pygame.image.load("screens/menu/assets/minisfondo.png")
    }

    # ridimenziono le immagini rispetto alla dimenzione della finestra
    immagini = resizeImgs(immagini, OFFSET_FINESTRA)


    # loop di menuScreen
    while True:
        finestra.blit(immagini['sfondoImg'], (0,0))
        mini=immagini['miniSfondo']
        mini=pygame.transform.scale(mini, (640*OFFSET_FINESTRA, 360*OFFSET_FINESTRA))
        finestra.blit(mini,(620*OFFSET_FINESTRA,300*OFFSET_FINESTRA))
        # catturo la posizione del mouse 
        posizioneMouse = pygame.mouse.get_pos()

        # creo e stampo sulla finestra il titolo di gioco
        giocoTxt = getFont("forwardFont", int(80 * OFFSET_FINESTRA)).render("Kiki's Key", True, "#b68f40")
        finestra.blit(giocoTxt, (int(100 * OFFSET_FINESTRA), int(50 * OFFSET_FINESTRA)))

        # creo il bottone: gioca
        giocaBtn =  btn( 
                        img = immagini['giocaBtnImg'], 
                        pos = (int(240 * OFFSET_FINESTRA), int(290 * OFFSET_FINESTRA)), 
                        txt = "GIOCA", 
                        font = getFont("forwardFont", int(30 * OFFSET_FINESTRA)), 
                        coloreTxt = "#ffffff", 
                        coloreTxtHover = "#000000"
                    )

        # creo il bottone: opzioni
        opzioniBtn =    btn(
                            img = immagini['opzioniBtnImg'], 
                            pos = (int(240 * OFFSET_FINESTRA), int(430 * OFFSET_FINESTRA)), 
                            txt = "OPZIONI", 
                            font = getFont("forwardFont", int(30 * OFFSET_FINESTRA)),  
                            coloreTxt = "#ffffff", 
                            coloreTxtHover = "#000000"
                        )

        # creo il bottone: esci
        esciBtn =   btn(
                        img = immagini['esciBtnImg'], 
                        pos = (int(240 * OFFSET_FINESTRA), int(570 * OFFSET_FINESTRA)), 
                        txt = "ESCI", 
                        font = getFont("forwardFont", int(30 * OFFSET_FINESTRA)),  
                        coloreTxt = "#ffffff", 
                        coloreTxtHover = "#000000"
                    )

        # for per cambiare il colore del testo dei bottoni(hover) ed aggiornarlo 
        for bottone in [giocaBtn, opzioniBtn, esciBtn]:
            bottone.cambiaColoreTesto(posizioneMouse)
            bottone.aggiorna(finestra)

        # for per gestire gli eventi 
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()

            if event.type == pygame.MOUSEBUTTONDOWN:
                if giocaBtn.controllaSeCliccato(posizioneMouse):
                    giocaScreen(finestra, OFFSET_FINESTRA, FPS)

                if opzioniBtn.controllaSeCliccato(posizioneMouse):
                    opzioniScreen(finestra, OFFSET_FINESTRA, FPS)

                if esciBtn.controllaSeCliccato(posizioneMouse):
                    pygame.quit()
        
        # aggiorno la finestra
        pygame.display.update()	
        pygame.time.Clock().tick(FPS)



# importo le resorse
from utilities.font import getFont
from utilities.btn import btn
from utilities.resizeImgs import resizeImgs

# importo gli schermi
from screens.game.game import giocaScreen
from screens.opzioni.opzioni import opzioniScreen