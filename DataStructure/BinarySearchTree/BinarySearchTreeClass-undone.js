class Node {
  constructor(key) {
    this.key = key;
    this.value = key;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(param = null) {
    if (param) {
      this.root = new Node(param);
    } else {
      this.root = null;
    }
  }

  insert(key) {
    if (this.root === null) {
      this.root = new Node(key);
    } else {
      this._insertNode(this.root, key);
    }
  }

  _insertNode(node, key) {
    if (key < node.key) {
      if (node.left === null) {
        node.left = new Node(key); { 1 }
      } else {
        this._insertNode(node.left, key); { 2 }
      }
    } else if (key > node.key) {
      if (node.right === null) {
        node.right = new Node(key); { 3 }
      } else {
        this._insertNode(node.right, key); { 4 }
      }
    }
  }

  inOrderTraverse(callback) {
    this._inOrderTraverse(this.root, callback);
  }

  _inOrderTraverse(node, callback) {
    if (node) {
      this._inOrderTraverse(node.left, callback);
      callback(node.key);
      this._inOrderTraverse(node.right, callback);
    }
  }

  search(value) {
    return this._search(value, this.root);
  }

  _search(value, node) {
    if (node === null) {
      return false;
    } else if (value > node.value) {
      return this._search(value, node.right);
    } else if (value < node.value) {
      return this._search(value, node.left);
    } else {
      return node;
    }
  }

  remove(value) {
    this.root = this._removeNode(this.root, value);
  }

  _removeNode(node, value) {
    if (!node) {
      return null;
    }
    if (value > node.value) {
      node.right = this._removeNode(node.right, value);
      return node;
    } else if (value < node.value) {
      node.left = this._removeNode(node.left, value);
      return node;
    } else {
      // 如果左右子节点都没有
      if (!node.left && !node.right) {
        return null;
      }
      // 如果只有一个子节点
      if (node.left === null) {
        return node.right;
      }
      if (node.right === null) {
        return node.left;
      }
      // 如果同时拥有两个节点，就取有子节点最小值来替换当前被删除节点
      const minNode = this._minNode(node.right);
      node.value = minNode.value;
      node.right = this._removeNode(node.right, minNode.value);
      return node;
    }
  }

  _minNode(node) {
    if (node) {
      while (node && node.left !== null) {
        node = node.left
      }
      return node
    }
    return null
  }
}

// example test
const tree = new Tree(5)
tree.insert(2)
tree.insert(3)
tree.insert(4)
tree.insert(1)
tree.insert(6)
const node1 = tree.search(1)
const node3 = tree.search(3)
const node5 = tree.search(5)
// console.log('node1', node1)
// console.log('node3', node3)
console.log('node5', node5)

tree.remove(2)
console.log('node5', node5)



