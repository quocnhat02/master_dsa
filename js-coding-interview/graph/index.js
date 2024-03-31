const LinkedList = require('../link');

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Graph {
  constructor(vertices) {
    this.vertices = vertices;
    this.list = [];
    for (let idx = 0; idx < vertices; idx++) {
      let element = new LinkedList();
      this.list.push(element);
    }
  }

  addEdge(source, destination) {
    if (source < this.vertices && destination < this.vertices) {
      this.list[source].insertAtHead(destination);
    }
  }

  printGraph() {
    for (let i = 0; i < this.list.length; i++) {
      process.stdout.write('|' + String(i) + '| => ');
      let temp = this.list[i].head;
      while (temp != null) {
        process.stdout.write('[' + String(temp.data) + '] -> ');
        temp = temp.nextElement;
      }
      console.log('null ');
    }
  }
}

let g = new Graph(4);

g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 3);

g.printGraph();
