const LinkedList = require('../link');

class Graph {
  constructor(vertices) {
    this.vertices = vertices;
    this.list = [];
    for (let idx = 0; idx < vertices.length; idx++) {
      const element = new LinkedList();
      this.list.push(element);
    }
  }
}
