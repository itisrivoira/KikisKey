import pygame

def getFont(font, dimensione): 
    fontPath = f"assets/fonts/{font}.TTF"
    return pygame.font.Font(fontPath, dimensione)