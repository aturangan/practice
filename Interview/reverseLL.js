function reverseLL(head) {
  let current = headOfList; 
  let previous = null; 
  let next = null; 

  while (current) {
    next = current.next;  
    current.next = previous; 
    previous = current;
    current = next;  
  }

  return previous; 
}
