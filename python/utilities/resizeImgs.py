import pygame

def resizeImgs(immaginiDict, OFFSET_FINESTRA):
    tempDict = dict()
    for nomeImmagine in immaginiDict: 
        immagine = immaginiDict[nomeImmagine]
        tempDict[nomeImmagine] = pygame.transform.scale(immagine, (int(immagine.get_width() * OFFSET_FINESTRA), int(immagine.get_height() * OFFSET_FINESTRA)))

    return tempDict


