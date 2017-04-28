window.onload = function() {

	// canvas and context for drawing
	canvas = document.getElementById('canvas');
	ctx = canvas.getContext('2d');
	
	// explode button
	explodeButton = document.getElementById('explodeButton');
	
	// explosion settings fields
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
	
	// secondary and tertiary explosion fields
	secondaryExplosion = document.getElementById('secondaryExplosion');
	tertiaryExplosion = document.getElementById('tertiaryExplosion');
	secondaryExplosionDelay = document.getElementById('secondaryExplosionDelay');
	tertiaryExplosionDelay = document.getElementById('tertiaryExplosionDelay');
	
	// shockwave fields
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
	
	// sparks fields
	sparksCheckbox = document.getElementById('sparksCheckbox');
	sparksNumberOfParticles = document.getElementById('sparksNumberOfParticles');
	sparksNumberOfTailParticles = document.getElementById('sparksNumberOfTailParticles');
	sparksLifeSpan = document.getElementById('sparksLifeSpan');
	sparksMinSize = document.getElementById('sparksMinSize');
	sparksMaxSize = document.getElementById('sparksMaxSize');
	sparksTailSizeChange = document.getElementById('sparksTailSizeChange');
	sparksMinSpeed = document.getElementById('sparksMinSpeed');
	sparksMaxSpeed = document.getElementById('sparksMaxSpeed');
	sparksTailSpeedChange = document.getElementById('sparksTailSpeedChange');
	sparksStartColorR = document.getElementById('sparksStartColorR');
	sparksStartColorG = document.getElementById('sparksStartColorG');
	sparksStartColorB = document.getElementById('sparksStartColorB');
	sparksStartColorA = document.getElementById('sparksStartColorA');
	sparksColorChangeR = document.getElementById('sparksColorChangeR');
	sparksColorChangeG = document.getElementById('sparksColorChangeG');
	sparksColorChangeB = document.getElementById('sparksColorChangeB');
	sparksColorChangeA = document.getElementById('sparksColorChangeA');
	

	// when explode button pressed
	explodeButton.addEventListener('click', function() {
	
		// add explosion
		var id = Math.random();
		var explosion = new Explosion(id, 400, 300);
		explosionList[id] = explosion;
		explosion.initParticles();
		
		// add secondary explosion if checked
		if(secondaryExplosion.checked) {
			setTimeout(function() {
				var id = Math.random();
				var explosion = new Explosion(id, 402, 298);
				explosionList[id] = explosion;
				explosion.initParticles();
			}, secondaryExplosionDelay.value);
		}
		
		// add tertiary explosion if checked
		if(tertiaryExplosion.checked) {
			setTimeout(function() {
				var id = Math.random();
				var explosion = new Explosion(id, 400, 302);
				explosionList[id] = explosion;
				explosion.initParticles();
			}, tertiaryExplosionDelay.value);
		}
		
		// add shockwave if checked
		if(shockwaveCheckbox.checked) {
			var id = Math.random();
			var shockwave = new Shockwave(id, 400, 300);
			shockwaveList[id] = shockwave;
		}
		
		// add sparks if checked
		if(sparksCheckbox.checked) {
			var id = Math.random();
			var sparks = new Sparks(id, 400, 300);
			sparksList[id] = sparks;
			sparks.initParticles();
		}
	});
	
	
	// if secondary explosion checkbox checked 
	secondaryExplosion.addEventListener('change', function() {
		if(this.checked) {
			secondaryExplosionDelay.disabled = false;
			secondaryExplosionSpan.style.color = '#ddd';
		} else {
			secondaryExplosionDelay.disabled = true;
			secondaryExplosionSpan.style.color = '#999';
		}
	});
	
	
	// if tertiary explosion checkbox checked 
	tertiaryExplosion.addEventListener('change', function() {
		if(this.checked) {
			tertiaryExplosionDelay.disabled = false;
			tertiaryExplosionSpan.style.color = '#ddd';
		} else {
			tertiaryExplosionDelay.disabled = true;
			tertiaryExplosionSpan.style.color = '#999';
		}
	});
	
	
	// if shockwave checkbox checked 
	shockwaveCheckbox.addEventListener('change', function() {
		if(this.checked) {
			enableShockwaveFields();
		} else {
			disableShockwaveFields();
		}
	});
	
	
	// if sparks checkbox checked 
	sparksCheckbox.addEventListener('change', function() {
		if(this.checked) {
			enableSparksFields();
		} else {
			disableSparksFields();
		}
	});

	
	// if button for small explosion settings pressed
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
		sparksCheckbox.checked = false;
		disableSparksFields();
	});
	
	
	// if button for medium explosion settings pressed
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
		sparksCheckbox.checked = false;
		disableSparksFields();
	});
	
	
	// if button for big explosion settings pressed
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
		sparksCheckbox.checked = false;
		disableSparksFields();
	});
	
	
	// if button for medium explosion with sparks settings pressed
	settings4Button.addEventListener('click', function() {
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
		sparksCheckbox.checked = true;
		enableSparksFields();
		sparksNumberOfParticles.value = 8;
		sparksNumberOfTailParticles.value = 15;
		sparksLifeSpan.value = 50;
		sparksMinSize.value = 0.5;
		sparksMaxSize.value = 2;
		sparksTailSizeChange.value = 0.9;
		sparksMinSpeed.value = 2;
		sparksMaxSpeed.value = 6;
		sparksTailSpeedChange.value = 0.97;
		sparksStartColorR.value = 200;
		sparksStartColorG.value = 120;
		sparksStartColorB.value = 0;
		sparksStartColorA.value = 1;
		sparksColorChangeR.value = 4;
		sparksColorChangeG.value = 6;
		sparksColorChangeB.value = 0;
		sparksColorChangeA.value = 0.035;
	});
	
	
	// canvas animation
	var animateExplosions = setInterval(function(){
		
		// clear canvas
		ctx.clearRect(0,0,800, 600);
				
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
		
		// draw and update sparks
		for (var i in sparksList) {
			var sparks = sparksList[i];
			sparks.drawSparks();
			sparks.updateParticles();
			
			sparks.lifeTime--;
			if(sparks.lifeTime < 0) {
				delete sparksList[i];
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