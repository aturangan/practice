//Remove dups from an unsorted linked list 
//O(n) time but doesn't include native methods to linkedList

class linkedList {
  constructor() {
    this.head = null; 
  }

  removeDups() {
    if (!this.head) {
      console.log('No duplicates were found. Empty or single element Linked List'); 
      return; 
    }
    
    let head = this.head; 
    let next = head.next; 
    let nodes = {}; 

    nodes[head.data] = true; 

    while (next) {
      let data = next.data; 
      
      if (nodes[data]) {
        head.next = next.next; 
      } else {
        nodes[data] = true; 
        head = next; 
      }
      next = next.next; 
    }
  }
};