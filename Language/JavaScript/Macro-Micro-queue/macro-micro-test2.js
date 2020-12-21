// 此段代码在 node v10 和 chrome 86 环境下执行结果不同



setTimeout(function () {
  console.log("will be executed at the top of the next Event Loop");
}, 0)

var p1 = new Promise(function (resolve, reject) {
  resolve(1);
})



setTimeout(function () {
  console.log("will be executed at the bottom of the next Event Loop");
}, 0)

p1.then(function (value) {
  console.log("p1 fulfilled");
})

for (var i = 0; i < 3; i++) {
  (function (j) {
    p1.then(function (value) {
      console.log("promise then - " + j)
    });
  })(i)
}