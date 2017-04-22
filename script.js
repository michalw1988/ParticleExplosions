var explodeButton;
var canvas;
var ctx;
var explosionList = {};

var numberOfParticles;
var lifeTime;
var minStartSize;
var maxStartSize;
var sizeChange;
var minStartSpeed;
var maxStartSpeed;
var speedChange;
var startColorR;
var startColorG;
var startColorB;
var startColorA;
var colorRChange;
var colorGChange;
var colorBChange;
var colorAChange;

var secondaryExplosion;
var secondaryExplosionDelay;
var tertiaryExplosion;
var tertiaryExplosionDelay;


window.onload = function() {
	
	canvas = document.getElementById('canvas');
	ctx = canvas.getContext('2d');
	explodeButton = document.getElementById('explodeButton');
	numberOfParticles = document.getElementById('numberOfParticles');
	particleSize = document.getElementById('particleSize');
	
	minStartSize = document.getElementById('minStartSize');
	lifeTime = document.getElementById('lifeTime');
	maxStartSize = document.getElementById('maxStartSize');
	sizeChange = document.getElementById('sizeChange');
	minStartSpeed = document.getElementById('minStartSpeed');
	maxStartSpeed = document.getElementById('maxStartSpeed');
	speedChange = document.getElementById('speedChange');
	startColorR = document.getElementById('startColorR');
	startColorG = document.getElementById('startColorG');
	startColorB = document.getElementById('startColorB');
	startColorA = document.getElementById('startColorA');
	colorRChange = document.getElementById('colorRChange');
	colorGChange = document.getElementById('colorGChange');
	colorBChange = document.getElementById('colorBChange');
	colorAChange = document.getElementById('colorAChange');
	
	secondaryExplosion = document.getElementById('secondaryExplosion');
	tertiaryExplosion = document.getElementById('tertiaryExplosion');
	secondaryExplosionDelay = document.getElementById('secondaryExplosionDelay');
	tertiaryExplosionDelay = document.getElementById('tertiaryExplosionDelay');
	

	explodeButton.addEventListener("click", function() {
		var id = Math.random();
		var explosion = new Explosion(id, 400, 300);
		explosionList[id] = explosion;
		explosion.initParticles();
		
		if(secondaryExplosion.checked) {
			setTimeout(function() {
				var id = Math.random();
				var explosion = new Explosion(id, 402, 298);
				explosionList[id] = explosion;
				explosion.initParticles();
			}, secondaryExplosionDelay.value);
		}
		
		if(tertiaryExplosion.checked) {
			setTimeout(function() {
				var id = Math.random();
				var explosion = new Explosion(id, 400, 302);
				explosionList[id] = explosion;
				explosion.initParticles();
			}, tertiaryExplosionDelay.value);
		}
	});
	
	
	var animateExplosions = setInterval(function(){
		ctx.clearRect(0,0,800, 600);
		//ctx.fillStyle = 'white';
		//ctx.fillText('Number of explosions: ' + Object.keys(explosionList).length, 10, 20);
		
		// update explosions
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
