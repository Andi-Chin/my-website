
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FF0000";


ctx.fillRect(0, 0, 150, 75);
ctx.moveTo(0, 0);
ctx.lineTo(100, 150);
ctx.stroke();


//half a circle
ctx.beginPath();
ctx.arc(300, 300, 50, Math.PI / 2, Math.PI);
ctx.stroke();

var grd = ctx.createLinearGradient(0, 0, 200, 0);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(0, 300, 200, 100);

ctx.font = "30px Arial";
ctx.fillStyle = 'green';
ctx.textAlign = 'center';
ctx.fillText("Hello World", 300, 50);




window.onload = function() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var img = document.getElementById("mineblox");
    ctx.drawImage(img, 0, 450);
    drawClock();
    setInterval(drawClock, 1000);
}

//drawing a clock
function drawClock() {
	ctx.fillStyle = "#AC22FF";
	ctx.fillRect(500, 100, 300, 300);

	var clockX = 500 + 150;
	var clockY = 100 + 150;

	//clock outer ring
	drawCircle(clockX, clockY, 145, '#AAAAAA');
	//inner ring
	drawCircle(clockX, clockY, 140, '#888888');
	//dot in the middle
	drawCircle(clockX, clockY, 3, '#555555');
	//draws the numbers
	drawNumbers();
	//draws the hands
	drawHands();
}


function drawCircle(x, y, r, color) {
	ctx.beginPath();
	ctx.arc(x, y, r, 0, Math.PI * 2);
	ctx.fillStyle = color;
	ctx.fill();
}

const angle30 = Math.PI / 6;
const angle90 = Math.PI / 2;

function drawNumbers() {
	
	for (var i = 1; i < 13; i ++) {
		ctx.fillText(i, 
			Math.cos(i * angle30 - angle90) * 100 + 650, 
			Math.sin(i * angle30 - angle90) * 100 + 250);
	}
}


function drawHands() {
	var now = new Date();
	var hour = now.getHours();
	var minute = now.getMinutes();
	var second = now.getSeconds();

	hand(hour % 12, 7);
	hand(minute / 5, 4);
	hand(second / 5, 1);

	// console.log(now);

	function hand(timeValue, width) {
		ctx.lineWidth = width;
		ctx.moveTo(650, 250);
		var xPos = Math.cos(timeValue * angle30 - angle90) * 100 + 650;
		var yPos = Math.sin(timeValue * angle30 - angle90) * 100 + 250;
		ctx.lineTo(xPos, yPos);
		ctx.stroke();
	}

}

console.log('reached the end of the program');

