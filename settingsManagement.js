// functions for fast enabling and disabling groups of fields

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

function enableSparksFields() {
	sparksNumberOfParticles.disabled = false;
	sparksNumberOfTailParticles.disabled = false;
	sparksLifeSpan.disabled = false;
	sparksMinSize.disabled = false;
	sparksMaxSize.disabled = false;
	sparksTailSizeChange.disabled = false;
	sparksMinSpeed.disabled = false;
	sparksMaxSpeed.disabled = false;
	sparksTailSpeedChange.disabled = false;
	sparksStartColorR.disabled = false;
	sparksStartColorG.disabled = false;
	sparksStartColorB.disabled = false;
	sparksStartColorA.disabled = false;
	sparksColorChangeR.disabled = false;
	sparksColorChangeG.disabled = false;
	sparksColorChangeB.disabled = false;
	sparksColorChangeA.disabled = false;
	var sparksSpans = document.getElementsByClassName('sparksSpan');
	for (var i = 0; i < sparksSpans.length; i++) {
		sparksSpans[i].style.color = '#ddd';
	}
}

function disableSparksFields() {
	sparksNumberOfParticles.disabled = true;
	sparksNumberOfTailParticles.disabled = true;
	sparksLifeSpan.disabled = true;
	sparksMinSize.disabled = true;
	sparksMaxSize.disabled = true;
	sparksTailSizeChange.disabled = true;
	sparksMinSpeed.disabled = true;
	sparksMaxSpeed.disabled = true;
	sparksTailSpeedChange.disabled = true;
	sparksStartColorR.disabled = true;
	sparksStartColorG.disabled = true;
	sparksStartColorB.disabled = true;
	sparksStartColorA.disabled = true;
	sparksColorChangeR.disabled = true;
	sparksColorChangeG.disabled = true;
	sparksColorChangeB.disabled = true;
	sparksColorChangeA.disabled = true;
	var sparksSpans = document.getElementsByClassName('sparksSpan');
	for (var i = 0; i < sparksSpans.length; i++) {
		sparksSpans[i].style.color = '#999';
	}
}