windowHeight = 0.99 * document.documentElement.clientHeight;
windowWidth = 0.99 * document.documentElement.clientWidth;
contHeight = windowHeight * 0.45;
contWidth = windowWidth * 0.9 * 0.3;
let scale = (Math.min((Math.max(contHeight, contWidth))/4, Math.min(contHeight, contWidth))) * 0.99 ;
console.log(contHeight + "   " + contWidth)

for (let i = 0; i<3; i+=1) {
	for (let j = 0; j < 4; j+=1) {
		document.getElementById("c"+i+"_"+j).style.width = scale + "px";
		document.getElementById("c"+i+"_"+j).style.height = scale + "px";
	}
}

containers = document.getElementsByClassName("container");
for (let i = 0; i<3; i+=1) {
	for (let j = 0; j < 4; j+=1) {
		document.getElementById("c"+i+"_"+j).style.left = ($("#ch"+i).position().left + (windowWidth * 0.9 * 0.1) / 6) + "px";
	}
}