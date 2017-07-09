
//addTwoNumbers on leetcode, done

var addTwoNumbers = function(l1, l2) {
  if (l1 === null) { return l2; } 
  if (l2 === null) { return l1; } 
  
  var head = new ListNode(0); 
  var current = head; 
  var count = 0; 
  
  while (l2 !== null || l1 !== null || count > 0) {
    current.next = new ListNode(0); //create a new node at the end 
    current = current.next; //make the current node the next node 
    
    if (l1 !== null) { //if there are still nodes in l1 
      count += l1.val; //add the node's value to count 
      l1 = l1.next; //go to the next node in l1 
    }
    
    if (l2 !== null) { //if there are still nodes in l2 
      count += l2.val; //add the node's value to count 
      l2 = l2.next; //go to the next node in l2 
    }
    
    current.val = count % 10; //the current value in the new linked list is % 10
    count = parseInt(count / 10); //the count gets added to the next value in the list  
  }
  
  return head.next; 
};

addTwoNumbers([2,4,3], [5,6,4]);