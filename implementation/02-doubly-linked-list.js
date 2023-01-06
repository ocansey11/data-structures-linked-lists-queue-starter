// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here

        // Add node of val to head of linked list
        let newNode = new DoublyLinkedNode(val);
        if(!this.head && !this.tail){
            this.tail = newNode
            this.head = newNode
            this.length++
        }else if(this.length === 1){
            this.tail.prev =  newNode
            this.head = newNode
            newNode.next = this.tail
            this.length++
        }else{

        let oldHead = this.head

        newNode.next = this.head
        this.head.prev = newNode
        this.head = newNode

        this.length++

        return oldHead
        }
        // O(1) head and tail values prevents traversing, hence reduce time complexity to O(1)
    }

    addToTail(val) {
        // Add node of val to tail of linked list
        const newNode = new DoublyLinkedNode(val)
        if(this.length === 0){
            this.tail = newNode
            this.head = newNode
            this.length++
        }else if(this.length === 1){
            this.head.next = newNode
            newNode.prev =  this.head
            this.tail = newNode
            this.length++
        }else{
        newNode.prev = this.tail
        this.tail.next = newNode
        this.tail = newNode

        this.length++
        }

        // Write your hypothesis on the time complexity of this method here
        // O(1) head and tail values prevents traversing, hence reduce time complexity to O(1)
    }

    removeFromHead() {
        // Remove node at head
        if( this.length === 0){
            return undefined
        }
        if(this.length === 1){
            let removed = this.head.value
            this.head = null
            this.length = 0
            return removed
        }
        else{
            let removed = this.head.value
            this.head = this.head.next
            this.head.prev = null
            this.length--
            return removed
        }
        // Write your hypothesis on the time complexity of this method here
        // O(1) head and tail values prevents traversing, hence reduce time complexity to O(1)
    }

    removeFromTail() {
        // Remove node at tail
        if( this.length === 0){
            return undefined
        }
        if(this.length === 1){
            let removed = this.tail.value
            this.tail = null
            this.length = 0
            return removed
        }
        else{
            let removed = this.tail.value
            this.tail = this.tail.prev
            this.tail.next = null
            this.length--
            return removed
        }

        // Write your hypothesis on the time complexity of this method here
        // O(1) head and tail values prevents traversing, hence reduce time complexity to O(1)
    }

    peekAtHead() {
        // Return value of head node
        if(this.head){
            return this.head.value
        }

        // Write your hypothesis on the time complexity of this method here
        // O(1)
    }

    peekAtTail() {
        // Return value of tail node
        if(this.tail){
            return this.tail.value
        }
        // Write your hypothesis on the time complexity of this method here
        // O(1) because tail, is stored in memory. and the computer will just need to retrieve the value directly instead of traversing the list
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
