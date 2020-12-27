function BinarySearch() {

  let Node = function (key) { // 节点
      this.key = key // 键
      this.left = null // 左侧子节点
      this.right = null // 右侧子节点
  }
  let root = null // 根节点

  // 向树中插入一个新的键
  let insertNode = function (node, newNode) {
      if (newNode.key < node.key) {
          if (node.left === null) {
              node.left = newNode
          } else {
              insertNode(node.left, newNode)
          }
      } else {
          if (node.right === null) {
              node.right = newNode
          } else {
              insertNode(node.right, newNode)
          }
      }
  }
  this.insert = function (key) {
      let newNode = new Node(key)
      if (root === null) { // 第一个键值
          root = newNode
      } else {
          insertNode(root, newNode)
      }
  }

  // 通过中序遍历方式遍历所有节点
  let inOrderTraverseNode = function (node, callback) {
      if (node != null) {
          inOrderTraverseNode(node.left, callback)
          callback(node.key)
          inOrderTraverseNode(node.right, callback)
      }
  }
  this.inOrderTraverse = function (callback) {
      inOrderTraverseNode(root, callback)
  }

  // 通过先序遍历方式遍历所有节点
  let preOrderTraverse = function (node, callback) {
      if (node !== null) {
          callback(node.key)
          preOrderTraverse(node.left, callback)
          preOrderTraverse(node.right, callback)
      }
  }
  this.preOrderTraverse = function (callback) {
      preOrderTraverse(root, callback)
  }

  // 通过后序遍历方式遍历所有节点
  let postOrderTraverse = function (node, callback) {
      if (node !== null) {
          postOrderTraverse(node.left, callback)
          postOrderTraverse(node.right, callback)
          callback(node.key)
      }
  }
  this.postOrderTraverse = function (callback) {
      postOrderTraverse(root, callback)
  }

  // 返回树中最小的键
  let minNode = function (node) {
      if (node) {
          while(node && node.left !== null) {
              node = node.left
          }
          return node.key
      }
      return null
  }
  this.min = function () {
      return minNode(root)
  }

  // 返回树中最大的键
  let maxNode = function (node) {
      if (node) {
          while(node && node.right !== null) {
              node = node.right
          }
          return node.key
      }
      return null
  }
  this.max = function () {
      return maxNode(root)
  }

  // 在树中查找一个键，如果节点存在，则返回true；如果节点不存在，则返回false
  let searchNode = function (node, key) {
      if (node === null) {
          return false
      }
      if (key < node.key) {
          return searchNode(node.left, key)
      } else if (key > node.key) {
          return searchNode(node.right, key)
      } else { // 相等
          return true
      }
  }
  this.search = function (key) {
      return searchNode(root, key)
  }

  // 从树中移除指定键
  let removeNode = function (node, key) {
      if (node === null) {
          return null
      }
      if (key < node.key) {
          node.left = removeNode(node.left, key)
          return node
      } else if (key > node.key) {
          node.right = removeNode(node.right, key)
          return node
      } else {
          if (node.left === null && node.right === null) {
              node = null
              return node
          }
          if (node.left === null) {
              node = node.right
              return node
          } else if (node.right === null) {
              node = node.left
              return node
          }
          let aux = minNode(node.right)
          node.key = aux.key
          node.right = removeNode(node.right, aux.key)
          return node
      }
  }
  this.remove = function (key) {
      root = removeNode(root, key)
  }
}
function printNode(value) {
  console.log(value)
}
let tree = new BinarySearch()
tree.insert(11)
tree.insert(7)
tree.insert(15)
tree.insert(5)
tree.insert(3)
tree.insert(9)
tree.insert(8)
tree.insert(10)
tree.insert(13)
tree.insert(12)
tree.insert(14)
tree.insert(20)
tree.insert(18)
tree.insert(25)
tree.insert(6)
tree.inOrderTraverse(printNode) // 3 5 6 7 8 9 10 11 12 13 14 15 18 20 25
tree.preOrderTraverse(printNode) // 11 7 5 3 6 9 8 10 15 13 12 14 20 18 25
tree.postOrderTraverse(printNode) // 3 6 5 8 10 9 7 12 14 13 18 25 20 15 11
console.log(tree.min()) // 3
console.log(tree.max()) // 25
console.log(tree.search(10)) // true
console.log(tree.search(100)) // false
tree.remove(25)
tree.inOrderTraverse(printNode) // 3 5 6 7 8 9 10 11 12 13 14 15 18 20