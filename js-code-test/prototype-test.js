/* class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

class Square extends Polygon {
  constructor(sideLength) {
    super(sideLength, sideLength);
  }
  get area() {
    return this.height * this.width;
  }
  set sideLength(newLength) {
    this.height = newLength;
    this.width = newLength;
  }
}

var square = new Square(2);
console.log(Polygon.prototype)
// console.log(Square)
// console.log(square.__proto__.__proto__)
console.log(square.constructor.__proto__.prototype) */

// create 方法的参数即创建对象的原型对象,如果希望 a 关联上 Object 需要 Object.create(Object.prototype)
var a = Object.create(Object.prototype)
// var a = {a: 1};
a.a = 1
// a ---> Object.prototype ---> null

var b = Object.create(a);
// b ---> a ---> Object.prototype ---> null
// console.log(b.a); // 1 (继承而来)

var c = Object.create(b);

console.log(Object.prototype)
console.log(a)
console.log(b.__proto__)
console.log(c)


/* function foo(){}
foo.prototype = {
  foo_prop: "foo val"
};
function bar(){}
var proto = Object.create(
  foo.prototype
);
proto.bar_prop = "bar val";
bar.prototype = proto;
var inst = new bar;
console.log(inst.foo_prop);
console.log(inst.bar_prop); */

/* function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

Car.prototype.b = 3;
Car.prototype.c = 4;
const auto = new Car('Honda', 'Accord', 1998);

console.log(auto)
console.log(Car)

console.log(Object)
console.log(auto instanceof Car);
// expected output: true

console.log(auto instanceof Object);
// expected output: true */
