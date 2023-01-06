const { DoublyLinkedList } = require('./02-doubly-linked-list')
const doublylinkedList =  new DoublyLinkedList()

let newNode = doublylinkedList.addToTail(4)
let newNode1 = doublylinkedList.addToTail(3)
let newNode2 = doublylinkedList.addToTail(2)
let newNode3 = doublylinkedList.addToTail(1)
let newNode4 = doublylinkedList.addToTail(0)

// uncomment to test for 'even values' for #mid method
// let newNode5 = doublylinkedList.addToTail(24)

function reverese(list){
    let curr =  list.tail
    let revereseOrder = ''
    for(i = 0; i < list.length; i++){
        if(i == list.length - 1){
            revereseOrder += curr.value
        } else{
            revereseOrder += curr.value + ' => '
        }
        curr = curr.prev
    }
    return revereseOrder
}

console.log(reverese(doublylinkedList))

function mid(list){
    let curr = list.head
    let n = 0

    if(list.length % 2 == 0){
        let mid = list.length/2
        while(n < mid){
            curr = curr.next
            n += 1
        }
        return curr.value + ' and ' + curr.prev.value
    }
    else{
        let mid =  (list.length/2) - 0.5
        while(n < mid){
            curr = curr.next
            n +=1
        }
        return curr.value
    }

}

console.log('Middle node is :' + mid(doublylinkedList))
