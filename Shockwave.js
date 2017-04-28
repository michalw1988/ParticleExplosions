// class for single shockwave

function Shockwave(id, x, y) {
	this.id = id;
	this.x = x;
	this.y = y;
	this.lifeTime = shockwaveLifeTime.value;
	this.size = shockwaveStartSize.value;
	this.sizeChange = shockwaveSizeChange.value;
	this.colorR = shockwaveStartColorR.value;
	this.colorG = shockwaveStartColorG.value;
	this.colorB = shockwaveStartColorB.value;
	this.colorA = shockwaveStartColorA.value;
	this.colorRChange = shockwaveColorRChange.value;
	this.colorGChange = shockwaveColorGChange.value;
	this.colorBChange = shockwaveColorBChange.value;
	this.colorAChange = shockwaveColorAChange.value;
	
	this.drawShockwave = function() {
		ctx.fillStyle = 'rgba('+ this.colorR +', '+ this.colorG +', '+ this.colorB +', '+ this.colorA +')';
		ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI, false);
    ctx.fill();
	}
	
	this.updateShockwave = function() {
		this.size = parseFloat(this.size) + parseFloat(this.sizeChange);
		this.colorR -= this.colorRChange;
		this.colorG -= this.colorGChange;
		this.colorB -= this.colorBChange;
		this.colorA -= this.colorAChange;
	}
}