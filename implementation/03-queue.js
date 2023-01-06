const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0
    }

    enqueue(val) {
        // Add node to end of queue (linked list)
        let newNode = new SinglyLinkedNode(val);
        if (!this.head && !this.tail) {
            this.head = newNode;
            this.tail = newNode
            this.length++
            return this.length
        }
        else if(this.length >= 1){
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
            this.length++
            return this.length
        }
        // Write your hypothesis on the time complexity of this method here
        // O(1) because theres a pointer to the 'tail' in memory, the computer will not have to traverse the list in order to add to the tail
    }

    dequeue() {
        // Remove node from front of queue (linked list)
        if(this.length == 1){
            let removed = this.head.value
            this.head = null
            this.tail = null
            return removed
        }
        if(this.length == 0){
            return null
        }

        let removed = this.head.value
        this.head = this.head.next
        this.length--
        return removed
        // Write your hypothesis on the time complexity of this method here
        // O(1)
    }

}

module.exports = {
    Queue,
    SinglyLinkedNode
}
