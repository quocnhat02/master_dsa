const { Queue, LinkedList } = require('../graph/example');

class Graph {
  constructor(vertices) {
    this.vertices = vertices;
    this.list = [];

    for (let i = 0; i < vertices; i++) {
      const element = new LinkedList();
      this.list.push(element);
    }
  }

  addEdge(source, destination) {
    if (source < this.vertices && destination < this.vertices) {
      this.list[source].insertAtHead(destination);
    }
  }
}

function bfs(g) {
  if (g.vertices < 1) {
    return null;
  }

  let obj = { result: '' };

  let visited = [];

  for (let i = 0; i < g.vertices; i++) {
    if (!visited[i]) {
      bfs_helper(g, i, visited, obj);
    }
  }

  return obj.result;
}

function bfs_helper(g, source, visited, obj) {
  let queue = new Queue(g.vertices);
  queue.enqueue(source);
  visited[source] = true;

  while (queue.isEmpty() == false) {
    let currentNode = queue.dequeue();
    obj.result += String(currentNode);

    let tempNode = g.list[currentNode].getHead();
    while (tempNode !== null) {
      if (visited[tempNode.data] === false) {
        queue.enqueue(tempNode.data);
        visited[tempNode.data] = true;
      }
      tempNode = tempNode.next;
    }
  }
}
