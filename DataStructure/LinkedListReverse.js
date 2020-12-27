//节点构造函数
function Node(val) {
  this.val = val
  this.next = null
}

//定义链表
function List(array) {
  this.head = null
  let i = 0, temp = null
  while (i < array.length) {
    if (i === 0) {
      this.head = new Node(array[i])
      temp = this.head
    } else {
      let newNode = new Node(array[i])
      temp.next = newNode
      temp = temp.next
    }
    i++
  }

  return this.head
}
//遍历链表
function traverseList(listHead) {
  while (listHead) {
    console.log(listHead.val)
    listHead = listHead.next
  }
}

function reverseList(head) {
  let pre = null
  while (head) {
    next = head.next
    head.next = pre
    pre = head
    head = next
  }
  return pre
}


// example
const listHead = List([1, 2, 3, 4, 5])
const revesedHead = reverseList(listHead)
traverseList(revesedHead)