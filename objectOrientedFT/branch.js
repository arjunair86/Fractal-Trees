function Branch(begin, end){
	this.begin = begin;
	this.end = end;
	this.finished = false;

	this.jitter = function(){
		this.end.x += random(-1, 1);
		this.end.y += random(-1, 1);
	}

	this.show = function(){
		stroke(255);
		line(this.begin.x, this.begin.y, this.end.x, this.end.y);
	}

	this.branchR = function(){
		var directionVector = p5.Vector.sub(this.end, this.begin);
		directionVector.rotate(PI/4);
		directionVector.mult(0.67);
		var newEnd = p5.Vector.add(this.end, directionVector);

		var right = new Branch(this.end, newEnd);
		return right;
	}

	this.branchL = function(){
		var directionVector = p5.Vector.sub(this.end, this.begin);
		directionVector.rotate(-PI/4);
		directionVector.mult(0.67);
		var newEnd = p5.Vector.add(this.end, directionVector);

		var left = new Branch(this.end, newEnd);
		return left;
	}
}