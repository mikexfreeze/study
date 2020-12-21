var p1 = new Promise(function (resolve, reject) {
  resolve(1);
})
var p2 = new Promise(function (resolve, reject) {
  resolve(1);
})

setTimeout(function () {
  console.log("will be executed at the top of the next Event Loop");
}, 0)

p1.then(function (value) {
  console.log("p1 fulfilled");
})

var p3 = new Promise(function (resolve, reject) {
  setTimeout(() => { resolve(1); }, 0);
});

for (var i = 0; i < 3; i++) {
  (function (j) {
    p3.then(function (value) {
      console.log("promise then - " + j)
    });
  })(i)
}

setTimeout(function () {
  console.log("will be executed at the bottom of the next Event Loop");
}, 0)

p2.then(function (value) {
  console.log("p2 fulfilled");
})

