class Polygon {
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
console.log(Polygon)
console.log(Square)
console.log(square)


// var a = {a: 1};
// // a ---> Object.prototype ---> null

// var b = Object.create(a);
// // b ---> a ---> Object.prototype ---> null
// console.log(b.a); // 1 (继承而来)

// var c = Object.create(b);

// console.log(a.constructor.prototype)
// console.log(b.constructor.prototype)
// console.log(c)

// function foo(){}
// foo.prototype = {
//   foo_prop: "foo val"
// };
// function bar(){}
// var proto = Object.create(
//   foo.prototype
// );
// proto.bar_prop = "bar val";
// bar.prototype = proto;
// var inst = new bar;
// console.log(inst.foo_prop);
// console.log(inst.bar_prop);

// function Car(make, model, year) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
// }
// const auto = new Car('Honda', 'Accord', 1998);

// console.log(auto)

// console.log(Object)
// console.log(auto instanceof Car);
// expected output: true

// console.log(auto instanceof Object);
// expected output: true
