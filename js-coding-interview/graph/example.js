export class Queue {
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
    return this.items.length == 0;
  }

  getFront() {
    if (this.items.length != 0) {
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
    if (this.items.length == 0) {
      console.log('No elements');
    } else {
      return this.items.shift();
    }
  }
}
class Node {
  constructor(data) {
    this.data = data;
    this.nextElement = null;
  }
}

export class LinkedList {
  constructor() {
    this.head = new Node(-1);
    this.length = 0;
  }

  //Insertion At Head
  insertAtHead(dt) {
    let tempNode = new Node(dt);
    tempNode.nextElement = this.head.nextElement;
    this.head.nextElement = tempNode;
    this.length = this.length + 1;
    return this; //returning the updated list
  }

  //Insert At Tail

  insertAtTail(value) {
    let node = new Node(value);

    //Start from headNode
    let currentNode = this.getHead();

    if (currentNode.nextElement == null) {
      //Needs to Insert the new node at Head
      currentNode.nextElement = node;
      this.length = this.length + 1;
      return this;
    }
    //Iterate to the last element
    while (currentNode.nextElement != null) {
      currentNode = currentNode.nextElement;
    }

    //Make new node the nextElement of last node of list
    currentNode.nextElement = node;
    this.length = this.length + 1;
    return this;
  }

  //Delete At Head
  deleteAtHead() {
    //Get the head and first element of the list
    let head = this.getHead();
    let firstElement = head.nextElement;
    //If list is not empty, link head to the nextElement of firstElement
    if (firstElement != null) {
      head.nextElement = firstElement.nextElement;
      firstElement.nextElement = null;
    }
    return this;
  }

  isEmpty() {
    return this.length == 0;
  }

  getHead() {
    return this.head;
  }

  getListStr() {
    if (this.isEmpty()) {
      console.log('Empty List');
      return 'null';
    } else {
      let st = '';
      let temp = this.head;
      while (temp.nextElement != null) {
        st += String(temp.nextElement.data);
        st += ' -> ';
        temp = temp.nextElement;
      }
      st += 'null';
      return st;
    }
  }

  //search
  search(value) {
    //Start from the first element
    let currentNode = this.getHead().nextElement;

    //Traverse the list until you find the value or reach the end
    while (currentNode != null) {
      if (currentNode.data == value) {
        return true; //value found
      }
      currentNode = currentNode.nextElement;
    }
    return false; //value not found
  }

  //delete by value
  deleteVal(value) {
    let deleted = false; //True or False
    //Check if list if empty, return false if it is
    if (this.isEmpty()) {
      console.log('Empty list');
      return deleted;
    }
    let currentNode = this.getHead().nextElement; //Get current node
    let previousNode = null; //Get previous node
    if (currentNode.data == value) {
      this.deleteAtHead(); //Use the previous function
      deleted = true;
      return deleted;
    }

    //Traversing/Searching for Node to Delete
    while (currentNode != null) {
      //Node to delete is found
      if (value == currentNode.data) {
        previousNode.nextElement = currentNode.nextElement; //previous node now points to next node
        currentNode.nextElement = null;
        deleted = true;
        break;
      }
      previousNode = currentNode;
      currentNode = currentNode.nextElement;
    }
    if (deleted == false) {
      console.log(String(value), ' is not in list!');
    } else {
      console.log(String(value), ' deleted!');
    }
    return deleted;
  }

  //function to print the linked list
  printList() {
    if (this.isEmpty()) {
      console.log('Empty List');
      return false;
    } else {
      let temp = this.head;
      while (temp.nextElement != null) {
        process.stdout.write(String(temp.nextElement.data));
        process.stdout.write(' -> ');
        temp = temp.nextElement;
      }
      console.log('null');
      return true;
    }
  }
}
class Graph {
  constructor(vertices) {
    //Total number of vertices in the graph
    this.vertices = vertices;
    //List that holds linked lists equal to the number of vertices in the graph
    this.list = [];
    //Creating a new linked list for each vertice of the graph
    let it;
    for (it = 0; it < vertices; it++) {
      let temp = new LinkedList();
      this.list.push(temp);
    }
  }

  addEdge(source, destination) {
    //Since we are implementing a directed list, (0,1) is not the same as (1,0)
    this.list[source].insertAtHead(destination);
    //If we were to implement an undirected graph where (0,1)==(1,0),
    //we would create an additional edge from destination to source too:
    //self.list[destination].insertAtHead(source);
    return this;
  }

  printGraph() {
    console.log('>>Adjacency List of Directed Graph<<');
    let i;
    for (i = 0; i < this.list.length; i++) {
      process.stdout.write('|' + String(i) + '| => ');
      let temp = this.list[i].getHead().nextElement;
      while (temp != null) {
        process.stdout.write('[' + String(temp.data) + '] -> ');
        temp = temp.nextElement;
      }
      console.log('None');
    }
  }

  strGraph() {
    let str = '';
    let i;
    for (i = 0; i < this.list.length; i++) {
      str = str + '|' + String(i) + '| => ';
      let temp = this.list[i].getHead().nextElement;
      while (temp != null) {
        str += '[' + String(temp.data) + '] -> ';
        temp = temp.nextElement;
      }
      str += 'None. ';
    }
    return str;
  }
}

function bfsTraversal_helper(g, source, visited, obj) {
  //Create Queue(implemented in previous lesson) for Breadth First Traversal and enqueue source in it
  let queue = new Queue(g.vertices);
  queue.enqueue(source);
  visited[source] = true;
  //Traverse while queue is not empty
  while (queue.isEmpty() == false) {
    //Dequeue a vertex/node from queue and add it to result
    let current_node = queue.dequeue();
    obj.result += String(current_node);
    //Get adjacent vertices to the current_node from the list,
    //and if they are not already visited then enqueue them in the Queue
    let temp = g.list[current_node].getHead();
    while (temp != null) {
      if (visited[temp.data] == false) {
        queue.enqueue(temp.data);
        visited[temp.data] = true; //Visit the children
      }
      temp = temp.nextElement;
    }
  }
}

function bfsTraversal(g) {
  if (g.vertices < 1) {
    return null;
  }

  let obj = { result: '' };

  //An array to hold the history of visited nodes
  //Make a node visited whenever you push it into stack
  let visited = [];
  for (let x = 0; x < g.vertices; x++) {
    visited.push(false);
  }

  for (let i = 0; i < g.vertices; i++) {
    if (!visited[i]) bfsTraversal_helper(g, i, visited, obj);
  }

  return obj.result;
}

function dfsTraversal_helper(g, source, visited, obj) {
  //Create Stack(Implemented in previous lesson) for Depth First Traversal and Push source in it
  let stack = new Stack(g.vertices);
  stack.push(source);
  visited[source] = true;
  //Traverse while stack is not empty
  while (stack.isEmpty() == false) {
    //Pop a vertex/node from stack and add it to the result
    let current_node = stack.pop();
    obj.result += String(current_node);
    //Get adjacent vertices to the current_node from the array,
    //and if they are not already visited then push them in the stack
    let temp = g.list[current_node].getHead();
    while (temp != null) {
      if (visited[temp.data] == false) {
        stack.push(temp.data);
        visited[temp.data] = true;
      }
      temp = temp.nextElement;
    }
  }
}

function dfsTraversal(g) {
  if (g.vertices < 1) {
    return null;
  }

  var obj = { result: '' };

  //An array to hold the history of visited nodes
  //Make a node visited whenever you push it into stack
  var visited = [];
  for (var x = 0; x < g.vertices; x++) {
    visited.push(false);
  }

  for (var i = 0; i < g.vertices; i++) {
    if (!visited[i]) dfsTraversal_helper(g, i, visited, obj);
  }

  return obj.result;
}

let g1 = new Graph(6);
g1.addEdge(1, 2);
g1.addEdge(1, 3);
g1.addEdge(2, 4);
g1.addEdge(2, 5);
console.log(bfsTraversal(g1, 0));
