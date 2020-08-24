const arr = [[1, 4, 7], [2, 'a', 8], [3, 6, 9]]
const output = [[1, 2, 3], [4, 'a', 6], [7, 8, 9]]

function sort(arr){
  let leng = arr[0].length
  let res = []
  for (let i = 0; i < leng; i++) {
    res.push([])
  }
  for (let i = 0; i < arr.length; i++) {
    const subArr = arr[i];
    for (const v of subArr) {
      res[i].push(v)
    }
  }

  return res
  
}

var res = sort(arr)
console.log(res)