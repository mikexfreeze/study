/**
 * 时间复杂度 O(n2)
 * 空间复杂度 O(1)
 */
function insertSort(arr){
  //默认第一个元素已经被排序
  for(let i = 1,len = arr.length; i < len; i++){
      //从后往前依次和 当前元素比较 并交换位置
      for(let j = i; j > 0; j--){
          if(arr[j] < arr[j-1]){
              swap(arr,j,j-1)
          }else{
              break
          }
      }
  }
  return arr;
}

function swap(arr,i,j){
  //[arr[i],arr[j]] = [arr[j],arr[i]];
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// example
let arr = [2,5,10,7,10,32,90,9,11,1,0,10]
console.log(insertSort(arr));