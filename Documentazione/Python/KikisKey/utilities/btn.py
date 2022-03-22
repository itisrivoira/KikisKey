class btn():
	def __init__(self, img, pos, txt, font, coloreTxt, coloreTxtHover):
		self.img = img
		self.x_pos = pos[0]
		self.y_pos = pos[1]
		self.font = font
		self.coloreTxt, self.coloreTxtHover = coloreTxt, coloreTxtHover
		self.txt = txt
		self.text = self.font.render(self.txt, True, self.coloreTxt)
		self.rect = self.img.get_rect(center=(self.x_pos, self.y_pos))
		self.text_rect = self.text.get_rect(center=(self.x_pos, self.y_pos))
		
		if self.img is None:
			self.img = self.text


	def aggiorna (self, schermo):
		if self.img is not None:
			schermo.blit(self.img, self.rect)
		schermo.blit(self.text, self.text_rect)

	def controllaSeCliccato (self, posizione):
		if posizione[0] in range(self.rect.left, self.rect.right) and posizione[1] in range(self.rect.top, self.rect.bottom):
			return True
		return False

	def cambiaColoreTesto (self, posizione):
		if posizione[0] in range(self.rect.left, self.rect.right) and posizione[1] in range(self.rect.top, self.rect.bottom):
			self.text = self.font.render(self.txt, True, self.coloreTxtHover)
		else:
			self.text = self.font.render(self.txt, True, self.coloreTxt)