var len = 3
var n = 2
var arrArr = [
  [2, 5, 6, 7, 9, 5, 7],
  [1, 7, 4, 3, 4],
]

var arraySplicing = function(len, arrArr){
  var res = []
  while (arrArr.length > 0) {
    for (let [index, arr] of arrArr.entries()) {
      if(arr.length === 0){
        arrArr.splice(index, 1)
      }
      for (i = 0; i < len; i++) {
        if(arr[i] !== undefined){
          res.push(arr[i])
        }
      }
      arr.splice(0, len)
    }
  }

  return res
}

var res = arraySplicing(len, arrArr)
console.log(res.join(","))