const { SinglyLinkedList } = require('./01-singly-linked-list')
const linkedList =  new SinglyLinkedList()

let newNode = linkedList.addToTail(4)
let newNode1 = linkedList.addToTail(3)
let newNode2 = linkedList.addToTail(2)


function sumOfNodes(list){
    let total = list.head.value
    let curr =  list.head
    while(curr.next){
        total += curr.next.value
        curr = curr.next
    }
    return total
}



console.log('Sum of Nodes is :' + sumOfNodes(linkedList))


//Average
function average(list){
   let total =  sumOfNodes(list)
   let results =  total/list.length
   return results
}

console.log('Average of list List is :' + average(linkedList))


// Find the Nth value in the Lists
function nthValue(list, position){
    if(position > list.length -1){
        throw Error('The position cannot be greater than the length minus 1')
    }

    let n = 0
    let curr =  list.head
    while (n < position){
        curr = curr.next
        n++
    }
    return curr.value
}

console.log('Nth value in List is :' + nthValue(linkedList, 2))
