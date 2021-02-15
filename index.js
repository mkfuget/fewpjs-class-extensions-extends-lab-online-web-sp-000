// Your code here
class Polygon{
  constructor(sides)
  {
    this.sides = sides;
  }
  get countSides(){
    return this.sides.length
  }
  get perimeter(){
    return this.sides.reduce((memo, e) => memo + e, 0)
  }
}
class Triangle extends Polygon
{
  isValid(){
    return (countSides() == 3 && sides[0]+sides[1]>sides[2] && sides[1]+sides[0]>sides[2] && sides[2]+sides[1]>sides[0])
  }
}
