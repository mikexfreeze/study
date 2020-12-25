/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = (nums, k) => {
  // Option 1: Built-in sort
  // nums.sort((a, b) => a - b);
  // return nums[nums.length - k];

  //--------------------------------//
  // Option 2: Quicksort
  // quicksort(nums);
  // return nums[nums.length - k];
  
  //--------------------------------//
  // Option 3: Quickselect
  return quickselect(nums, nums.length - k);
}

const quickselect = (a, idxToSelect) => {
  const qsHelper = (a, idxToSelect, beginIdx, endIdx) => {
    if (beginIdx <= endIdx) {
      let partitionIdx = beginIdx;
      let pivotIdx = endIdx;
      
      for (let i = beginIdx; i < pivotIdx; i++) {
        if (a[i] < a[pivotIdx]) {
          [a[partitionIdx], a[i]] = [a[i], a[partitionIdx]];
          partitionIdx++;
        }
      }
      
      [a[partitionIdx], a[pivotIdx]] = [a[pivotIdx], a[partitionIdx]];
      if (idxToSelect === partitionIdx) {
        return a[idxToSelect];
      } else if (idxToSelect < partitionIdx) {
        return qsHelper(a, idxToSelect, beginIdx, partitionIdx - 1);
      } else if (idxToSelect > partitionIdx) {
        return qsHelper(a, idxToSelect, partitionIdx + 1, endIdx);
      }
    }
  }

  return qsHelper(a, idxToSelect, 0, a.length - 1);
}

const quicksort = (a) => {
  const qsHelper = (a, beginIdx, endIdx) => {
    if (beginIdx <= endIdx) {
      let partitionIdx = beginIdx;
      let pivotIdx = endIdx;
      
      for (let i = beginIdx; i < pivotIdx; i++) {
        if (a[i] < a[pivotIdx]) {
          [a[partitionIdx], a[i]] = [a[i], a[partitionIdx]];
          partitionIdx++;
        }
      }
      
      [a[partitionIdx], a[pivotIdx]] = [a[pivotIdx], a[partitionIdx]];
      qsHelper(a, beginIdx, partitionIdx - 1);
      qsHelper(a, partitionIdx + 1, endIdx);
    }
  }

  qsHelper(a, 0, a.length - 1);
}