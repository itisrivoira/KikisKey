import pygame

class imgBtn():
	def __init__(self, img, pos):
		self.img = img
		self.x_pos = pos[0]
		self.y_pos = pos[1]
		self.rect = self.img.get_rect(center=(self.x_pos, self.y_pos))

	def aggiorna (self, schermo):
		schermo.blit(self.img, self.rect)
		
	def controllaSeCliccato (self, posizione):
		if posizione[0] in range(self.rect.left, self.rect.right) and posizione[1] in range(self.rect.top, self.rect.bottom):
			return True
		return False
