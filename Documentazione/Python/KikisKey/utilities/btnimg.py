import pygame

class btnimg():
	def __init__(self, img, pos, imgNotHover, imgHover):
		self.img = img
		self.x_pos = pos[0]
		self.y_pos = pos[1]
		self.imgNotHover, self.imgHover = imgNotHover, imgHover
		self.rect = self.img.get_rect(center=(self.x_pos, self.y_pos))

	def aggiornaI (self, schermo):
		self.img=pygame.transform.scale(self.img, (150, 150))
		schermo.blit(self.img, self.rect)
		
	def controllaSeCliccatoI (self, posizione):
		if posizione[0] in range(self.rect.left, self.rect.right) and posizione[1] in range(self.rect.top, self.rect.bottom):
			return True
		return False

	def cambiaColoreImg (self, posizione):
		if posizione[0] in range(self.rect.left, self.rect.right) and posizione[1] in range(self.rect.top, self.rect.bottom):
			self.img = self.imgHover
		else:
			self.img = self.imgNotHover