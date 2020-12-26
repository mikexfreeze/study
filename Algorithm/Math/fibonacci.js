function memozi(fn) {
  var r = {}
  return function (n) {
    if (r[n] == null) {
      r[n] = fn(n)
      return r[n]
    } else {
      return r[n]
    }
  }
}

function fibonacci(n){
  if (n == 0) {
    return 0
  } else if (n == 1) {
    return 1
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2)
  }
}

var fibfn = memozi(fibonacci)

// example
var res = fibfn(11);
console.log(res);   