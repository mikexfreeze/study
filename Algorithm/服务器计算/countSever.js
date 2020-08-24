var grid = [
  [1, 0],
  [1, 1]
]

var countServers = function(grid) {
  let count = 0;let countArr = []
  grid.forEach((item, index, self) => {
    let tempCount = 0;
    for(let i = 0; i < item.length; i ++) {
        tempCount += item[i] == 1 ? 1 : 0;
    }
    if(tempCount == 1) {
        for(let i = 0; i < item.length; i ++) {
            if(item[i] == 1) {
                for(let j = 0; j < self.length; j ++) {
                    if(self[j][i] == 1 && j !== index) {
                        count += 1;
                        break;
                    }
                }
            }
        }
    }else if (tempCount > 1) {
        count += tempCount;
    }
    countArr.push(tempCount)
  })
  return Math.max(...countArr);
};


var res = countServers(grid)
console.log(res)

var countServers= function(grid, n, m) {
  let count_m=[], count_n=[]
  for (let i = 0; i < m; ++i) {
      for (let j = 0; j < n; ++j) {
          if (grid[i][j] == 1) {
              ++count_m[i];
              ++count_n[j];
          }
      }
  }
  let ans = 0;
  for (let i = 0; i < m; ++i) {
      for (let j = 0; j < n; ++j) {
          if (grid[i][j] == 1 && (count_m[i] > 1 || count_n[j] > 1)) {
              ++ans;
          }
      }
  }
  return ans;
}

var res = countServers(grid, n, m)
console.log(res)
