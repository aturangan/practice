let linkedList = (head, next) => {
  this.head = head; 
  this.next = next; 
}; 

let deleteMiddle = (node) => {
  if (!this.head) {
    return; 
  }
  
  let head = this.head; 
  let next = this.next; 
  
  while (next) {
    if (next.value === node.value) {
      head.next = next.next; 
    } else {
      head = next; 
    }
    next = next.next; 
  }
} 
