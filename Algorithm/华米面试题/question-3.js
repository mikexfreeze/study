/**
完成一个函数,接受数组作为参数,数组元素为整数或者数组,数组元素包含整数或数组,
函数返回扁平化后的数组
如：[1, [2, [ { a : 3, b : 4 }, '5'], 6] => [1, 2, 3, 4, 5, 6]
 */
var input = [1, 
  [2,  { a : 3, b : 4 }, '5'], 6
];
 var res = []
 function flat(arr){
  for (const ele of arr) {
    if(Array.isArray(ele)){
      flat(ele)
    }else if(typeof ele === 'number'){
      res.push(ele)
    }else if(typeof ele === 'object'){
      flatObject(ele)
    }else if(typeof ele === 'string'){
      res.push(parseInt(ele))
    }
  }
 }

 function flatObject(obj){
   for (const [i, v] of Object.entries(obj)) {
     res.push(v)
   }
 }
 
 flat(input);
 console.log(res);