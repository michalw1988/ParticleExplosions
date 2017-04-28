// class for single explosion particle

function Particle(x, y) {
	this.x = x;
	this.y = y;
	this.angle = Math.random()*360;	
	this.size = parseFloat(minStartSize.value) + parseFloat(maxStartSize.value - minStartSize.value) * Math.random();
	this.sizeChange = sizeChange.value;
	this.speed = parseFloat(minStartSpeed.value) + parseFloat(maxStartSpeed.value - minStartSpeed.value) * Math.random();
	this.speedChange = speedChange.value;	
	this.colorR = startColorR.value;
	this.colorG = startColorG.value;
	this.colorB = startColorB.value;
	this.colorA = startColorA.value;
	this.colorRChange = colorRChange.value;
	this.colorGChange = colorGChange.value;
	this.colorBChange = colorBChange.value;
	this.colorAChange = colorAChange.value;
}