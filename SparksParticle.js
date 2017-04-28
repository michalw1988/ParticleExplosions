// class for single spark particle

function SparksParticle(x, y) {
	this.x = x;
	this.y = y;
	this.angle = 0;		
	this.size = 0;
	this.speed = 0;
	this.colorR = sparksStartColorR.value;
	this.colorG = sparksStartColorG.value;
	this.colorB = sparksStartColorB.value;
	this.colorA = 0;
	this.colorRChange = sparksColorChangeR.value;
	this.colorGChange = sparksColorChangeG.value;
	this.colorBChange = sparksColorChangeB.value;
	this.colorAChange = sparksColorChangeA.value;
}