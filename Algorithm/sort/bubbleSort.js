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

// example
let arr = [2,5,10,7,10,32,90,9,11,1,0,10]
console.log(bubbleSort(arr));