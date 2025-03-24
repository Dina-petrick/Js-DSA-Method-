class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  createNode(value) {
    return {
      value: value,
      next: null,
    };
  }

  append(value) {
    let newNode = this.createNode(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    let newNode = this.createNode(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    let arr = [];
    let currentNode = this.head;

    while (currentNode != null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return arr;
  }

  insert(value, index) {
    if (index >= this.length) {
      return this.append(value);
    }
    let currentNode = this.createNode(value);
    let prevNode = this.traverseToIndex(index - 1);
    let holderNode = prevNode.next;
    currentNode.next = holderNode;
    prevNode.next = currentNode;
    this.length++;
  }

  traverseToIndex(index) {
    let currentNode = this.head;
    let counter = 0;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  remove(index) {
    if (index <= 0 || index >= this.length) {
      return;
    }

    let prevNode = this.traverseToIndex(index - 1);
    let NodeRemove = prevNode.next;
    let nextNode = NodeRemove.next;
    prevNode.next = nextNode;
    this.length--;
  }
}


// Sample 

let firstLinkedList = new LinkedList(10);
firstLinkedList.append(12);
firstLinkedList.append(16);
firstLinkedList.prepend(22);
firstLinkedList.prepend(25);
firstLinkedList.insert(23, 2);
firstLinkedList.remove(3);

console.log(firstLinkedList.printList());
