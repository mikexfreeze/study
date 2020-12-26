//分解质因数
var arr = [];
var a = 0;
function resolve(num) {
  // body... 
  if ((num == 1) || (num == 2) || (num == 3)) {
    arr[a++] = num;
    return arr;
  }
  for (var i = 2; i < num; i++) {
    if (num % i == 0) {
      arr[a++] = i;
      resolve(num / i);
      break;
    }

  }
  if (i >= num) {
    arr[a++] = num
  }
  return arr;
}

resolve(77);
console.log(arr);