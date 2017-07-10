//O(n)

let getKthLastElement = (head, k) => {
  if (!head || k < 1) {
    return undefined; 
  }
  
  let current = head; 
  let behindCurrent = head; 
  
  for (let i = 0; i < k - 1; i++) {
    current = current.next; 
    if (!current) {
      return undefined; 
    }
  }
  
  while (typeof current.next !== 'undefined') {
    behindCurrent = behindCurrent.next; 
    current = current.next; 
  }
  
  return behindCurrent; 
}

let SinglyLinkedList = (data, next) {
  this.data = data; 
  this.next = next; 
}