// class for single spark

function Sparks(id, x, y) {
	this.id = id;
	this.x = x;
	this.y = y;
	this.sparksNumberOfParticles = sparksNumberOfParticles.value;
	this.sparksNumberOfTailParticles = sparksNumberOfTailParticles.value;
	this.lifeTime = sparksLifeSpan.value;
	this.particleList = [];
	
	
	this.initParticles = function() {
		var angleStep = Math.PI*2 / this.sparksNumberOfParticles;
		
		for (var n = 0; n < this.sparksNumberOfParticles; n++) {
			var angle = n * angleStep + Math.random()*angleStep;
			var size = parseFloat(sparksMinSize.value) + parseFloat(sparksMaxSize.value - sparksMinSize.value) * Math.random();
			var speed = parseFloat(sparksMinSpeed.value) + parseFloat(sparksMaxSpeed.value - sparksMinSpeed.value) * Math.random();
			var alpha = sparksStartColorA.value;
			
			for (var i = 0; i < this.sparksNumberOfTailParticles; i++) {
				var particle = new SparksParticle(this.x, this.y);
				particle.angle = angle;
				particle.size = size;
				particle.speed = speed;
				particle.colorA = alpha;
				size *= sparksTailSizeChange.value;
				speed *= sparksTailSpeedChange.value;
				this.particleList.push(particle);
			}
		}
	}
	
	this.drawSparks = function() {
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
			particle.colorR -= particle.colorRChange;
			particle.colorG -= particle.colorGChange;
			particle.colorB -= particle.colorBChange;
			particle.colorA -= particle.colorAChange;
		}
	}
}