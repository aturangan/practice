function LinkedListNode(value) {
  this.value = value; 
  this.next = null; 
}; 

let hasCycle = (head) => {
  let first = head; 
  let second = head; 

  while (first && first.next) {
    second = second.next; 
    first = first.next.next; 

    if (first.value === second.value) {
      return true; 
    }
  }
  
  return false; 
};

let a = new LinkedListNode(3); 
let b = new LinkedListNode(4); 
let c = new LinkedListNode(5); 
let d = new LinkedListNode(7); 
let e = new LinkedListNode(8); 

a.next = b; 
b.next = c; 
c.next = d; 
d.next = e;
e.next = a; 

hasCycle(a); 
