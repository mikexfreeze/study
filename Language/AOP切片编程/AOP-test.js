Function.prototype.before = function(callback) {
  let self = this
  return function() { 
    callback()
    self.apply(self, arguments)
  }
}

function fn(...val) {
  console.log('原有功能,' + val)
}

let newFn = fn.before(function() { // 原有功能之前执行
  console.log('在原有功能函数之前执行') 
})

newFn('准备', '执行')  // 为原有功能传参
