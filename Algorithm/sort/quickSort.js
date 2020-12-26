/**
 * 时间复杂度 O(n2)
 * 空间复杂度 O(n)
 * 平均时间复杂度 O(nlogN)
 * 平均空间复杂度 O(logN)
 */

var quickSort = function (arr) {
  if (arr.length <= 1) { return arr; }
  // var pivotIndex = Math.floor(arr.length / 2);
  var pivotIndex = arr.length - 1;
  var pivot = arr.splice(pivotIndex, 1)[0];
  var left = [];
  var right = [];
  
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat([pivot], quickSort(right));
};

// example
let arr = [2,5,10,7,10,32,90,9,11,1,0,10]
console.log(quickSort(arr));