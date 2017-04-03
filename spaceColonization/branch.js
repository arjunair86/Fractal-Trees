function Branch(parent, pos, direction){
	this.pos = pos;
	this.parent = parent;
	this.direction = direction;
	this.originalDirection = direction.copy();
	this.count = 0;
	this.length = 5;

	this.reset = function(){
		this.direction = this.originalDirection.copy();
		count = 0;
	}

	this.next = function(){
		var nextDirection = p5.Vector.mult(this.direction, this.length);
		var nextPosition = p5.Vector.add(this.pos, this.direction);
		var nextBranch = new Branch(this, nextPosition, this.direction.copy());
		return nextBranch;
	}

	this.show = function(){
		if(parent != null){
			stroke(255);
			line(this.pos.x, this.pos.y, this.parent.pos.x, this.parent.pos.y);
		}
	}
}