class Node {
  constructor(data) {
    this.data = data;
    this.nextElement = null;
  }
}

class LinkList {
  constructor() {
    this.head = null;
  }

  isEmpty() {
    return this.head === null;
  }

  display() {
    let element = this.head;
    let string = '';
    while (element !== null) {
      string += `${element.data} -> `;
      element = element.nextElement;
    }

    return string + 'null';
  }

  insertHead(data) {
    const newNode = new Node(data);
    if (this.isEmpty()) {
      this.head = newNode;
    } else {
      const head = this.head;
      newNode.nextElement = head;
      this.head = newNode;
    }
  }
}

const link_list = new LinkList();

link_list.insertHead(1);
link_list.insertHead(2);
link_list.insertHead(3);

console.log(link_list.display());
