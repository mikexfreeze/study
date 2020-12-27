function Vertex() {
  if (!(this instanceof Vertex))
      return new Vertex();
  this.color = this.WHITE; //初始为 白色
  this.pi = null; //初始为 无前驱
  this.d = this.INFINITY; //初始为 无穷大
  this.edges = null; //由顶点发出的所有边
  this.value = null; //节点的值 默认为空
}
Vertex.prototype = {
  constructor: Vertex,
  WHITE: 'white', //白色
  GRAY: 'gray', //灰色
  BLACK: 'black', //黑色
  INFINITY: null, //d 为 null 时表示无穷大
}

//数据结构 邻接链表-边
function Edge() {
  if (!(this instanceof Edge))
      return new Edge();
  this.index = null; //边所依附的节点的位置
  this.sibling = null;
  this.w = null; //保存边的权值
}

//数据结构 图-G
function Graph() {
  if (!(this instanceof Graph))
      return new Graph();
  this.graph = [];
  this.refer = new Map(); //字典 用来映射标节点的识符和数组中的位置
}
Graph.prototype = {
  constructor: Graph,
  //这里加进来的已经具备了边的关系
  addNode: function(node) {
      this.graph.push(node);
  },
  getNode: function(index) {
      return this.graph[index];
  },
  //创建图的 节点
  initVertex: function(vertexs) {
      //创建节点并初始化节点属性 value
      for (let value of vertexs) {
          let vertex = Vertex();
          vertex.value = value;
          this.graph.push(vertex);
      }
      //初始化 字典
      for (let i in this.graph) {
          this.refer.set(this.graph[i].value,i);
      }
  },
  //建立图中 边 的关系
  initEdge: (function(){
      //创建链表，返回链表的第一个节点
      function createLink(index, len, edges, refer) {
          if (index >= len) return null;
          let edgeNode = Edge();
          edgeNode.index = refer.get(edges[index].id); //边连接的节点 用在数组中的位置表示 参照字典
          edgeNode.w = edges[index].w; //边的权值
          edgeNode.sibling = createLink(++index, len, edges, refer); //通过递归实现 回溯
          return edgeNode;
      }
      return function(edges) {
          for (let field in edges) {
              let index = this.refer.get(field); //从字典表中找出节点在 graph 中的位置
              let vertex = this.graph[index]; //获取节点
              vertex.edges = createLink(0, edges[field].length, edges[field], this.refer);
          }
      }
  }())
}

//广度优先搜索
function BFS(g, s) {
  let queue = [];
  s.color = s.GRAY;
  s.d = 0;
  queue.push(s);
  while (queue.length > 0) {
      let u = queue.shift();
      if (u.edges == null) continue;
      let sibling = u.edges;
      while (sibling != null) {
          let index = sibling.index;
          let n = g.getNode(index);
          if (n.color == n.WHITE) {
              n.color = n.GRAY;
              n.d = u.d + 1;
              n.pi = u;
              queue.push(n);
          }
          sibling = sibling.sibling;
      }
      u.color = u.BLACK;
      console.log(u)
  }
}

var vertexs = ['A', 'B', 'C', 'D', 'E', 'F'];
var edges = {
  A: [{ id: 'B', w: 1 }, { id: 'D', w: 2 }],
  B: [{ id: 'A', w: 3 }, { id: 'E', w: 3 }, { id: 'C', w: 7 }],
  C: [{ id: 'B', w: 5 }, { id: 'E', w: 3 }, { id: 'F', w: 4 }],
  D: [{ id: 'A', w: 2 }],
  E: [{ id: 'B', w: 3 }, { id: 'C', w: 7 }, { id: 'F', w: 3 }],
  F: [{ id: 'C', w: 6 }, { id: 'E', w: 9 }]
}
//构建图
var g = Graph();
g.initVertex(vertexs);
g.initEdge(edges);
//调用BFS
BFS(g, g.graph[1]);