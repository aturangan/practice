function LinkedList(){  
  this.head = null;
}

let reverseLL = (list) => {
  if (!list.head || !list.head.next) {
    return list; 
  }

  let nodes = []; 
  let current = list.head; 

  while (current) {
    nodes.push(current); 
    current = current.next; 
  }

  let reversedLL = new LinkedList(); 
  reversedLL.head = nodes.pop(); 
  current = reversedLL.head; 
  let node = nodes.pop(); 

  while (node) {
    node.next = null; 
    current.next = node; 

    current = current.next; 
    node = nodes.pop(); 
  }

  return reversedLL; 
}