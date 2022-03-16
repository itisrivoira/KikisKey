import pygame
import sys

#import delle resorse
from utilities.font import getFont
from utilities.btn import btn

def giocaScreen(finestra, OFFSET_FINESTRA, FPS):

    while True:
        finestra.fill("black")
        
        gameTxt = getFont("forwardFont", 50).render("this is game section", True, "#ffffff")
        finestra.blit(gameTxt, (100, 50))

        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                sys.exit()
        
        # aggiorno la finestra
        pygame.display.update()	
        pygame.time.Clock().tick(FPS)