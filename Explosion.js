// class for single explosion

function Explosion(id, x, y) {
	this.id = id;
	this.x = x;
	this.y = y;
	this.lifeTime = lifeTime.value;
	this.particleCount = numberOfParticles.value;
	this.particleList = [];
	
	this.initParticles = function() {
		for (var i = 0; i < this.particleCount; i++) {
			var particle = new Particle(this.x, this.y);
			this.particleList.push(particle);
		}
	}
	
	this.drawExplosion = function() {
		for (var i = 0; i < this.particleList.length; i++) {
			var particle = this.particleList[i];
			ctx.fillStyle = 'rgba('+ particle.colorR +', '+ particle.colorG +', '+ particle.colorB +', '+ particle.colorA +')';	
			ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, 2 * Math.PI, false);
      ctx.fill();
		}
	}
	
	this.updateParticles = function() {
		for (var i = 0; i < this.particleList.length; i++) {
			var particle = this.particleList[i];
			particle.x += Math.sin(particle.angle) * particle.speed;
			particle.y += Math.cos(particle.angle) * particle.speed;
			particle.size *= particle.sizeChange;
			particle.speed *= particle.speedChange;
			particle.colorR -= particle.colorRChange;
			particle.colorG -= particle.colorGChange;
			particle.colorB -= particle.colorBChange;
			particle.colorA -= particle.colorAChange;
		}
	}
}