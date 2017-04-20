var explodeButton;
var canvas;
var ctx;
var explosionList = {};


window.onload = function() {

	explodeButton = document.getElementById('explodeButton');
	canvas = document.getElementById('canvas');
	ctx = canvas.getContext('2d');

	explodeButton.addEventListener("click", function() {
		var id = Math.random();
		var explosion = new Explosion(id);
		explosionList[id] = explosion;
		explosion.initParticles();
	});
	
	
	
	var animateExplosions = setInterval(function(){
		ctx.fillStyle = 'white';
		ctx.clearRect(0,0,880, 580);
		ctx.fillText('Number of explosions: ' + Object.keys(explosionList).length, 10, 20);
		
		for (var i in explosionList) {
			var explosion = explosionList[i];
			explosion.drawExplosion();
			explosion.updateParticles();
			
			explosion.lifeTime--;
			if(explosion.lifeTime < 0) {
				delete explosionList[i];
			}
		}
		
	}, 30);
}



function Particle(x, y) {
	this.x = x;
	this.y = y;
	this.speed = 2;
	this.angle = Math.random()*360;
}



function Explosion(id) {
	this.id = id;
	this.x = Math.random()*700;
	this.y = Math.random()*500;
	this.lifeTime = 30;
	this.particleCount = 50;
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
			ctx.fillStyle = 'red';
			ctx.fillRect(particle.x ,particle.y ,10, 10);
		}
	}
	
	this.updateParticles = function() {
		for (var i = 0; i < this.particleList.length; i++) {
			var particle = this.particleList[i];
			particle.x += Math.sin(particle.angle) * particle.speed;
			particle.y += Math.cos(particle.angle) * particle.speed;
		}
	}
}
