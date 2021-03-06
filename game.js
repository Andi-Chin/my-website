
var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FF0000";

function drawCircle(x, y, r, color) {
	ctx.beginPath();
	ctx.arc(x, y, r, 0, Math.PI * 2);
	ctx.fillStyle = color;
	ctx.fill();
}

function obstacle(x) {
	this.x = x;
	this.width = 30;	
	this.y = 0;
	this.height = Math.random() * 200 + 20;

}

function lose() {
	clearInterval(timer);
	ctx.font = '50px Arial';
	ctx.fillStyle = '#000000';
	ctx.fillText("you lost! score: " + iteratons, 100, 300);

}

var pipes = [];
var timer;
var started = false;


var player = {
	x: 10,
	y: 0,
	r: 10,
	color: '#33A4DD',
	dy: 0,
	atBottom: false,

	buttonClick: function() {
		if (! started) {
			started = true;
			
			timer = setInterval(nextFrame, 17);
		}
		this.atBottom = false;
		this.dy = Math.abs(this.dy) - 10;
		
	},

	checkCollision: function() {
		for (var i = 0; i < pipes.length; i ++) {
			var obj = pipes[i];
			var xInRange = Math.abs((obj.x + obj.width / 2) - this.x) < this.r + obj.width / 2;
			var yInRange = Math.abs(this.y - (obj.y + obj.height)) < this.r;
			console.log(xInRange);
			if (xInRange && yInRange) {
				lose();
			}
		}
	},

	nextFrame: function() {
		var gravity = 0.7;

		// if (this.atBottom === false) {
			this.dy = (this.dy + gravity) * 0.9;
			this.y += this.dy;
		// }

		if (this.y + this.r > canvas.height) { 
			// this.atBottom = true; 
			lose();
		}	
		this.checkCollision();
	}
}







var iteratons = 0;
function nextFrame() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	player.nextFrame();
	


	drawCircle(player.x, player.y, player.r, player.color);

	for (var i = 0; i < pipes.length; i ++) {
		var obj = pipes[i]
		ctx.fillStyle = '#33DD77';
		ctx.fillRect(obj.x, obj.y, obj.width, obj.height);

		pipes[i].x -= 1;
	}

	if (iteratons % 200 === 0) {
		pipes.push(new obstacle(1000));
	}

	iteratons += 1;


}





