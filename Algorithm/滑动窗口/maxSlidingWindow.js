/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var n = 6
var nums = [10, 20, 30, 15, 23, 12]
var k = 3
// var maxSlidingWindow = function(n, nums, k) {
//   if(n == 0) return [];
//   let totalArray = []
//   for(let i = 0;i < n - k + 1;i++){
//       let max = 0;
//       for(let j = i;j < i + k;j++){
//           max = max + parseInt(nums[j])
//       }
//       totalArray.push(max);
//   }
//   return Math.max(...totalArray);
// };

var maxSlidingWindow = function(n, nums, k) {
  if(n == 0) return [];
  let totalArray = [];let res = 0;
  for(let i = 0;i < n - k + 1;i++){
    let max = 0;
    for(let j = i;j < i + k;j++){
      max = max + nums[j]
    }
    res = Math.max(max, res)
  }
  return res;
};

var res = maxSlidingWindow(n, nums, k)
console.log(res)