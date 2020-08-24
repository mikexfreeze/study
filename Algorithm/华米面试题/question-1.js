var s = "abcd"
var t = 'abcde'

function lookup(s, t){
  var arr1 = s.split('')
  var arr2 = t.split('')
  var res
  for (const v of arr2) {
    if(arr1.indexOf(v) === -1){
      res = v
    }
  }

  return res
}

var res = lookup(s, t)
console.log(res)

