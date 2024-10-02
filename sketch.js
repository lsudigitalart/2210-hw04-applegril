var x =10
var y = 10
var d = 10
var move = 5
let lineX = 0
let lineY = 0
let lineWidth = 1
let lineHeight = 1
var testX = 20
var testY = 20
var testWidth = 20
var testHeight = 20
var safe
var colorCheck;




function setup() {
    createCanvas(200, 200);
		safe = true
}


//BALL MOVE//

function draw(){
    background("black");
    ellipse(x, y, d);




    if (keyIsPressed){
        if (keyCode == LEFT_ARROW){
            x--;
        } else if (keyCode == RIGHT_ARROW){
            x++;
        }
        if(keyCode == UP_ARROW){
            y--;
        } else if (keyCode == DOWN_ARROW){
            y++;
        }
		}

if(x < 0){
    x = x + move
} 
if(x > width){
    x = x - move
} 
if(y < 0){
    y = y + move
} 
if(y > width){
    y = y - move
} 




	fill("white")
// 	text(mouseX, 10, 10);
//   text(mouseY, 10, 20);
	
	stroke("white");
	line(0, 15, 45, 15);
	line(23, 30, 170, 30);
	line(50, 45, 200, 45);
	line(0, 60, 70, 60);
	line (200, 60, 90, 60);
	line(20, 75, 180, 75);
	line(0, 90, 120, 90);
	line(70, 105, 180, 105); 
	line(50, 105, 0, 105);
	line(200, 120, 100, 120);
	line(0, 120, 80, 120);
	line(60, 135, 180, 135); 
	line(0, 150, 160, 150);
	line(200, 165, 35, 165);
	line(0, 180, 150, 180);
	line(70, 0, 70, 15);
	line(125, 30, 125, 15); 
	line (93, 15, 180, 15);
	line(0, 45, 25, 45);
	line (25, 45, 25, 30);
	line (145, 45, 145, 60);
	line(45, 75, 45, 90);
	line(200, 90, 142, 90);
	line(165, 90, 165, 105);
	line(173, 120, 173, 135)
	line(85, 135, 85, 150);
	line(150, 165, 150, 200);
	line(71, 165, 71, 180)

	
	stroke(0);
	line(122, 135, 142, 135);
	line(106, 165, 126, 165);
	line(70, 180, 50, 180);

    if (keyIsPressed){
		if (keyCode == LEFT_ARROW){
				colorCheck = get(x, y);
				print(colorCheck);
				if(colorCheck[0] == "white") {
                    x++;

				} 

		}
		
		if (keyCode == RIGHT_ARROW){
				colorCheck = get(x, y);
				print(colorCheck);
				if(colorCheck[0] == 0) {
					x--;
				}

		}
		if(keyCode == UP_ARROW){
				colorCheck = get(x, y);
				print(colorCheck);
				if(colorCheck[0] == 0) {
					y--;
				}
		}
		
		if (keyCode == DOWN_ARROW){
				colorCheck = get(x, y);
				print(colorCheck);
				if(colorCheck[0] == 0) {
					y++;
				}
		}
   
}

ellipse(x, y, d);



}
//i tried only the walls work :(


//function keyPressed() {
   // if(key == "") 
   //     print("space pressed")
//}

