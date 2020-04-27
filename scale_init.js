windowHeight = 0.99 * document.documentElement.clientHeight;
windowWidth = 0.99 * document.documentElement.clientWidth;
contHeight = windowHeight * 0.45;
contWidth = windowWidth * 0.9 * 0.3;
var vert = 0;
if (contHeight > contWidth) {vert = 1;}
let scale = (Math.min((Math.max(contHeight, contWidth))/4, Math.min(contHeight, contWidth))) * 0.8 ;

for (let i = 0; i<3; i+=1) {
	for (let j = 0; j < 4; j+=1) {
		$("#c"+i+"_"+j)[0].style.width = scale + "px";
		$("#c"+i+"_"+j)[0].style.height = scale + "px";
	}
}

function brownMove(elem){
	elem.style.transform = "translate(" + ((Math.random() - 0.5) * scale )/ 2 +"px, " + (Math.random() * scale / 2) + "px)";
	setTimeout(()=>{ brownMove(elem); }, 400);
	console.log(elem.style.left);
}
/*
function uuu(i, j, left0) {
	let randL = ((Math.random() - 0.5) * scale ) / 2;
	let randT = ((Math.random() - 0.5) * scale ) / 2;
	if (parseInt(($("#c"+i+"_"+j))[0].style.left) + randL > left0 * i && +
	parseInt(($("#c"+i+"_"+j))[0].style.left) + randL < left0 * (i + 1)) {
		($("#c"+i+"_"+j)).animate({left: "+=" + (randL)}, 600);
	}
	
	if 	(parseInt(($("#c"+i+"_"+j))[0].style.top) + randT > 0 && +
	parseInt(($("#c"+i+"_"+j))[0].style.top) + randT < contHeight) {
	($("#c"+i+"_"+j)).animate({top: "+=" + (randT)}, 600);
	}
	setTimeout(()=>{ uuu(i, j, left0);}, 600);
}
*/
containers = document.getElementsByClassName("container");
for (let i = 0; i<3; i+=1) {
	let left0 = ($("#ch"+i).position().left + (windowWidth * 0.9 * 0.1) / 6);
	for (let j = 0; j < 4; j+=1) {
		if (vert) {
			$("#c"+i+"_"+j)[0].style.top = (scale * 0.1 + j * scale / 0.8)  + "px";
			$("#c"+i+"_"+j)[0].style.left = (left0 + Math.random() * (contWidth - scale)) + "px";
			$("#c"+i+"_"+j)
		}
		else {
			$("#c"+i+"_"+j)[0].style.left = (left0 + scale * 0.1 + j * scale / 0.8)  + "px";
			$("#c"+i+"_"+j)[0].style.top = (Math.random() * (contHeight - scale)) + "px";
		}
	//	uuu(i, j, left0);
	}
}