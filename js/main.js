
var looper;
var degrees = 0;
function rotateAnimation("arrowLeft",15){
  var elem = document.getElementById("arrowLeft");
		arrowLeft.style.transform = "rotate("+degrees+"deg)";
	}
	looper = setTimeout('rotateAnimation(\''+el+'\','+speed+')',speed);
	degrees++;
	if(degrees > 359){
		degrees = 1;
	}
