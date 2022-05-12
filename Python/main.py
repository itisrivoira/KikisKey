import pygame

# importo gli schermi
from screens.menu.menu import menuScreen

from utilities.music import music

# inizializzo pygame
pygame.init()

# definisco i costanti
OFFSET_FINESTRA = 1
LARGHEZZA_FINESTRA = int(1280 * OFFSET_FINESTRA)
ALTEZZA_FINESTRA = int(720 * OFFSET_FINESTRA)
FPS = 60


# creo la finestra di gioco
finestra = pygame.display.set_mode((LARGHEZZA_FINESTRA, ALTEZZA_FINESTRA))


# imposto titolo ed icona dello schermo creato 
pygame.display.set_caption("Kiki's Key")
icona = pygame.image.load('assets/img/icona.png').convert_alpha()
pygame.display.set_icon(icona)


# avvio musica di sottofondo
musicaSottofondo = music(True, "assets/music/musica.mp3", 0.5)
musicaSottofondo.playMusic()

# creo sulla finestra il menu di gioco attraverso la funzione "menuScreen" 
menuScreen(finestra, musicaSottofondo, OFFSET_FINESTRA, FPS)
