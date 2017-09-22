var center = new Vector(40, 34);


var partner = this.findByType("peasant")[0];

loop {
    
    var vector = Vector.subtract(partner.pos, center);

    
    var moveToPos = Vector.subtract(center, vector);

    
    this.move(moveToPos);
}
