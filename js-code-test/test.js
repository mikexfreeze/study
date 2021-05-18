// var name = "Mozilla"; // name 是一个被 init 创建的局部变量
// function init() {
//   function displayName() { // displayName() 是内部函数，一个闭包
//       // alert(name); // 使用了父函数中声明的变量
//       console.log(name)
//   }
//   displayName();


// }
// init();

var name = 'World!';

(function () {
  console.log(1, name)
  console.log(2, this.name)
  
  if (typeof name === 'undefined') {
    var name = 'Jack';
    console.log('Goodbye ' + name);
  } else {
    console.log('Hello ' + name);
  }
})()

  