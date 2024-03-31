const Stack = require('../stack');

class Queue {
  constructor(mySize) {
    this.items = [];
    this.size = mySize;
    this.front = 0;
    this.back = -1;
  }

  isFull() {
    return this.items.length >= this.size;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  getFront() {
    if (this.items.length !== 0) {
      return this.items[0];
    } else {
      console.log('No elements in the queue');
    }
  }

  enqueue(element) {
    if (this.items.length >= this.size) {
      console.log('Queue is full');
    } else {
      this.items.push(element);
    }
  }

  dequeue() {
    if (this.items.length === 0) {
      console.log('No elements');
    } else {
      return this.items.shift();
    }
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = new Node(-1);
    this.length = 0;
  }

  isEmpty() {
    return this.length == 0;
  }

  getHead() {
    return this.head;
  }

  insertAtHead(dt) {
    let tempNode = new Node(dt);
    tempNode.next = this.head.next;
    this.head.next = tempNode;
    this.length++;
    return this;
  }
}

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
  if (!g.vertices) {
    return null;
  }

  let obj = { result: '' };

  let visited = new Array(g.vertices).fill(false);

  for (let i = 0; i < g.vertices; i++) {
    bfs_helper(g, i, visited, obj);
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
      if (!visited[tempNode.data]) {
        queue.enqueue(tempNode.data);
        visited[tempNode.data] = true;
      }
      tempNode = tempNode.next;
    }
  }
}

function dfs(g) {
  if (g.vertices < 1) {
    return null;
  }

  let obj = { result: '' };

  let visited = new Array(g.vertices).fill(false);

  for (let i = 0; i < g.vertices; i++) {
    dfs_helper(g, i, visited, obj);
  }

  return obj.result;
}

function dfs_helper(g, source, visited, obj) {
  let stack = new Stack(g.vertices);
  stack.push(source);
  visited[source] = true;

  while (stack.isEmpty() == false) {
    let currentNode = stack.pop();
    obj.result += String(currentNode);

    let tempNode = g.list[currentNode].getHead();
    while (tempNode !== null) {
      if (!visited[tempNode.data]) {
        stack.push(tempNode.data);
        visited[tempNode.data] = true;
      }
      tempNode = tempNode.next;
    }
  }
}
