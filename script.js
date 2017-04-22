var explodeButton;
var canvas;
var ctx;
var explosionList = {};
var shockwaveList = {};

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

var shockwaveCheckbox;
var shockwaveLifeTime;
var shockwaveStartSize;
var shockwaveSizeChange;
var shockwaveStartColorR;
var shockwaveStartColorG;
var shockwaveStartColorB;
var shockwaveStartColorA;
var shockwaveColorRChange;
var shockwaveColorGChange;
var shockwaveColorBChange;
var shockwaveColorAChange;



window.onload = function() {
	
	canvas = document.getElementById('canvas');
	ctx = canvas.getContext('2d');
	explodeButton = document.getElementById('explodeButton');
	
	numberOfParticles = document.getElementById('numberOfParticles');
	lifeTime = document.getElementById('lifeTime');
	minStartSize = document.getElementById('minStartSize');
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
	
	shockwaveCheckbox = document.getElementById('shockwave');
	shockwaveLifeTime = document.getElementById('shockwaveLifeTime');
	shockwaveStartSize = document.getElementById('shockwaveStartSize');
	shockwaveSizeChange = document.getElementById('shockwaveSizeChange');
	shockwaveStartColorR = document.getElementById('shockwaveStartColorR');
	shockwaveStartColorG = document.getElementById('shockwaveStartColorG');
	shockwaveStartColorB = document.getElementById('shockwaveStartColorB');
	shockwaveStartColorA = document.getElementById('shockwaveStartColorA');
	shockwaveColorRChange = document.getElementById('shockwaveColorRChange');
	shockwaveColorGChange = document.getElementById('shockwaveColorGChange');
	shockwaveColorBChange = document.getElementById('shockwaveColorBChange');
	shockwaveColorAChange = document.getElementById('shockwaveColorAChange');
	

	explodeButton.addEventListener('click', function() {
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
		
		if(shockwaveCheckbox.checked) {
			var id = Math.random();
			var shockwave = new Shockwave(id, 400, 300);
			shockwaveList[id] = shockwave;
		}
	});
	
	
	secondaryExplosion.addEventListener('change', function() {
		if(this.checked) {
			secondaryExplosionDelay.disabled = false;
			secondaryExplosionSpan.style.color = '#ddd';
		} else {
			secondaryExplosionDelay.disabled = true;
			secondaryExplosionSpan.style.color = '#999';
		}
	});
	
	
	tertiaryExplosion.addEventListener('change', function() {
		if(this.checked) {
			tertiaryExplosionDelay.disabled = false;
			tertiaryExplosionSpan.style.color = '#ddd';
		} else {
			tertiaryExplosionDelay.disabled = true;
			tertiaryExplosionSpan.style.color = '#999';
		}
	});
	
	
	shockwaveCheckbox.addEventListener('change', function() {
		if(this.checked) {
			enableShockwaveFields();
		} else {
			disableShockwaveFields();
		}
	});

	
	settings1Button.addEventListener('click', function() {
		numberOfParticles.value = 100;
		lifeTime.value = 30;
		minStartSize.value = 5;
		maxStartSize.value = 15;
		sizeChange.value = 0.9;
		minStartSpeed.value = 0.5;
		maxStartSpeed.value = 2.5;
		speedChange.value = 0.9;
		startColorR.value = 255;
		startColorG.value = 255;
		startColorB.value = 160;
		startColorA.value = 1;
		colorRChange.value = 5;
		colorGChange.value = 20;
		colorBChange.value = 40;
		colorAChange.value = 0.06;
		secondaryExplosion.checked = false;
		secondaryExplosionDelay.disabled = true;
		secondaryExplosionSpan.style.color = '#999';
		tertiaryExplosion.checked = false;
		tertiaryExplosionDelay.disabled = true;
		tertiaryExplosionSpan.style.color = '#999';
		secondaryExplosionDelay.value = 100;
		tertiaryExplosionDelay.value = 200;
		shockwaveCheckbox.checked = true;
		enableShockwaveFields();
		shockwaveLifeTime.value = 50;
		shockwaveStartSize.value = 15;
		shockwaveSizeChange.value = 2;
		shockwaveStartColorR.value = 100;
		shockwaveStartColorG.value = 0;
		shockwaveStartColorB.value = 0;
		shockwaveStartColorA.value = 1;
		shockwaveColorRChange.value = 5;
		shockwaveColorGChange.value = 0;
		shockwaveColorBChange.value = 0;
		shockwaveColorAChange.value = 0.1;
	});
	
	
	settings2Button.addEventListener('click', function() {
		numberOfParticles.value = 70;
		lifeTime.value = 30;
		minStartSize.value = 8;
		maxStartSize.value = 23;
		sizeChange.value = 0.9;
		minStartSpeed.value = 1;
		maxStartSpeed.value = 4;
		speedChange.value = 0.91;
		startColorR.value = 255;
		startColorG.value = 255;
		startColorB.value = 140;
		startColorA.value = 1;
		colorRChange.value = 5;
		colorGChange.value = 30;
		colorBChange.value = 40;
		colorAChange.value = 0.07;
		secondaryExplosion.checked = true;
		secondaryExplosionDelay.disabled = false;
		secondaryExplosionSpan.style.color = '#ddd';
		tertiaryExplosion.checked = true;
		tertiaryExplosionDelay.disabled = false;
		tertiaryExplosionSpan.style.color = '#ddd';
		secondaryExplosionDelay.value = 120;
		tertiaryExplosionDelay.value = 150;
		shockwaveCheckbox.checked = true;
		enableShockwaveFields();
		shockwaveLifeTime.value = 50;
		shockwaveStartSize.value = 20;
		shockwaveSizeChange.value = 3;
		shockwaveStartColorR.value = 100;
		shockwaveStartColorG.value = 0;
		shockwaveStartColorB.value = 0;
		shockwaveStartColorA.value = 1;
		shockwaveColorRChange.value = 5;
		shockwaveColorGChange.value = 0;
		shockwaveColorBChange.value = 0;
		shockwaveColorAChange.value = 0.04;
	});
	
	
	settings3Button.addEventListener('click', function() {
		numberOfParticles.value = 120;
		lifeTime.value = 30;
		minStartSize.value = 10;
		maxStartSize.value = 30;
		sizeChange.value = 0.95;
		minStartSpeed.value = 1;
		maxStartSpeed.value = 9;
		speedChange.value = 0.9;
		startColorR.value = 255;
		startColorG.value = 220;
		startColorB.value = 100;
		startColorA.value = 1;
		colorRChange.value = 5;
		colorGChange.value = 20;
		colorBChange.value = 40;
		colorAChange.value = 0.06;
		secondaryExplosion.checked = true;
		secondaryExplosionDelay.disabled = false;
		secondaryExplosionSpan.style.color = '#ddd';
		tertiaryExplosion.checked = false;
		tertiaryExplosionDelay.disabled = true;
		tertiaryExplosionSpan.style.color = '#999';
		secondaryExplosionDelay.value = 100;
		tertiaryExplosionDelay.value = 200;
		shockwaveCheckbox.checked = true;
		enableShockwaveFields();
		shockwaveLifeTime.value = 50;
		shockwaveStartSize.value = 10;
		shockwaveSizeChange.value = 10;
		shockwaveStartColorR.value = 100;
		shockwaveStartColorG.value = 0;
		shockwaveStartColorB.value = 0;
		shockwaveStartColorA.value = 1;
		shockwaveColorRChange.value = 5;
		shockwaveColorGChange.value = 0;
		shockwaveColorBChange.value = 0;
		shockwaveColorAChange.value = 0.07;
	});
	
	
	settings4Button.addEventListener('click', function() {
		numberOfParticles.value = 50;
		lifeTime.value = 30;
		minStartSize.value = 10;
		maxStartSize.value = 10;
		sizeChange.value = 1;
		minStartSpeed.value = 2;
		maxStartSpeed.value = 2;
		speedChange.value = 1;
		startColorR.value = 255;
		startColorG.value = 0;
		startColorB.value = 0;
		startColorA.value = 1;
		colorRChange.value = 0;
		colorGChange.value = 0;
		colorBChange.value = 0;
		colorAChange.value = 0;
		secondaryExplosion.checked = false;
		secondaryExplosionDelay.disabled = true;
		secondaryExplosionSpan.style.color = '#999';
		tertiaryExplosion.checked = false;
		tertiaryExplosionDelay.disabled = true;
		tertiaryExplosionSpan.style.color = '#999';
		secondaryExplosionDelay.value = 100;
		tertiaryExplosionDelay.value = 200;
		shockwaveCheckbox.checked = true;
		enableShockwaveFields();
		shockwaveLifeTime.value = 30;
		shockwaveStartSize.value = 20;
		shockwaveSizeChange.value = 2;
		shockwaveStartColorR.value = 100;
		shockwaveStartColorG.value = 0;
		shockwaveStartColorB.value = 0;
		shockwaveStartColorA.value = 1;
		shockwaveColorRChange.value = 0;
		shockwaveColorGChange.value = 0;
		shockwaveColorBChange.value = 0;
		shockwaveColorAChange.value = 0;
	});
	
	
	var animateExplosions = setInterval(function(){
		ctx.clearRect(0,0,800, 600);
		
		//ctx.fillStyle = 'white';
		//ctx.fillText('Number of explosions: ' + Object.keys(explosionList).length, 10, 20);
		//ctx.fillText('Number of shockwaves: ' + Object.keys(shockwaveList).length, 10, 35);
		
		// draw and update shockwaves
		for (var i in shockwaveList) {
			var shockwave = shockwaveList[i];
			shockwave.drawShockwave();
			shockwave.updateShockwave();
			
			shockwave.lifeTime--;
			if(shockwave.lifeTime < 0) {
				delete shockwaveList[i];
			}
		}
		
		// draw and update explosions
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


function enableShockwaveFields() {
	shockwaveLifeTime.disabled = false;
	shockwaveStartSize.disabled = false;
	shockwaveSizeChange.disabled = false;
	shockwaveStartColorR.disabled = false;
	shockwaveStartColorG.disabled = false;
	shockwaveStartColorB.disabled = false;
	shockwaveStartColorA.disabled = false;
	shockwaveColorRChange.disabled = false;
	shockwaveColorGChange.disabled = false;
	shockwaveColorBChange.disabled = false;
	shockwaveColorAChange.disabled = false;
	var shockwaveSpans = document.getElementsByClassName('shockwaveSpan');
	for (var i = 0; i < shockwaveSpans.length; i++) {
		shockwaveSpans[i].style.color = '#ddd';
	}
}


function disableShockwaveFields() {
	shockwaveLifeTime.disabled = true;
	shockwaveStartSize.disabled = true;
	shockwaveSizeChange.disabled = true;
	shockwaveStartColorR.disabled = true;
	shockwaveStartColorG.disabled = true;
	shockwaveStartColorB.disabled = true;
	shockwaveStartColorA.disabled = true;
	shockwaveColorRChange.disabled = true;
	shockwaveColorGChange.disabled = true;
	shockwaveColorBChange.disabled = true;
	shockwaveColorAChange.disabled = true;
	var shockwaveSpans = document.getElementsByClassName('shockwaveSpan');
	for (var i = 0; i < shockwaveSpans.length; i++) {
		shockwaveSpans[i].style.color = '#999';
	}
}