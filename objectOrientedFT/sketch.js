// var angle, slider;
var tree = [], root;
var count = 0;
var leaves = [];

function setup(){
	createCanvas(700, 600);
	// slider = createSlider(0, TWO_PI, PI/4, 0.01);
	var a = createVector(width/2, height);
	var b = createVector(width/2, height-200);
	root = new Branch(a, b);

	tree[0] = root;
}

function mousePressed(){
	for(var i = tree.length-1; i >= 0; i--){
		if(!tree[i].finished){
			tree.push(tree[i].branchR());
			tree.push(tree[i].branchL());
		}
		tree[i].finished = true;
	}
	count++;

	if(count === 5){
		for(var i = 0; i < tree.length; i++){
			if(!tree[i].finished){
				var leaf = tree[i].end.copy();
				leaves.push(leaf);
			}
		}
	}
}

function draw(){
	background(51);
	// stroke(255);
	// translate(350, height);
	// angle = slider.value();
	for(var i = 0; i < tree.length; i++){
		tree[i].show();
		// tree[i].jitter();
	}

	for(var i = 0; i < leaves.length; i++){
		fill(255, 0, 0, 75);
		noStroke();
		ellipse(leaves[i].x, leaves[i].y, 8, 8);
		leaves[i].y += random(0, 4);
	}
}

/*function branch(len){
	line(0, 0, 0, -len);
	translate(0, -len);

	if(len > 4) {
		push();
		rotate(angle);
		branch(len*0.67);
		
		pop();
		rotate(-angle);
		branch(len*0.67);
	}
}*/
