/**
比较相邻的元素。如果第一个比第二个大，就交换他们两个。
对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对。在这一点，最后的元素应该会是最大的数。
针对所有的元素重复以上的步骤，除了最后一个。
持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较
 */

function bubbleSort(array){
  for(let i = 0,len = array.length; i < len; i++){
      for(let j = 0; j < len-1-i; j++){
          if(array[j] > arr[j+1]){
              swap(array,j,j+1)
          }
      }
  }
  return array;
}

function swap(arr,i,j){
  [arr[i],arr[j]] = [arr[j],arr[i]];
}
// example
let arr = [2,5,10,7,10,32,90,9,11,3,0,1]
console.log(bubbleSort(arr));