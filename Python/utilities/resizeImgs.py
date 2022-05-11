import pygame

def resizeImgs(immaginiDict, OFFSET_FINESTRA,val=1):
    tempDict = dict()
    for nomeImmagine in immaginiDict: 
        immagine = immaginiDict[nomeImmagine].convert_alpha()
        tempDict[nomeImmagine] = pygame.transform.scale(immagine, (int(immagine.get_width() * OFFSET_FINESTRA*val), int(immagine.get_height() * OFFSET_FINESTRA*val)))
        
    return tempDict


