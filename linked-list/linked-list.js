class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}
class LinkedList {
    constructor(head = null) {
        this.head = head
    }
}

let node1 = new Node(2);
let node2 = new Node(5);
let node3 = new Node(10);
let node4 = new Node(15);
console.log(node1 );
console.log(node2 );
console.log(node3 );
console.log(node4 );
node1.next = node2;

let list = new LinkedList(node1)

console.log(list);