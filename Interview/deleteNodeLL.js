let deleteNode = (node) => {
  let next = node.next; 

  if (next) {
    node.value = next.value; 
    node.next = next.next; 
  } else {
    throw new Error('Can\'t delete the last node with this method!'); 
  }
};

//O(1) time, O(1) space 
//won't work for last node deletion
//might mess up other references to deleted node since that value is reassigned 
//could leave dangling node
//in place operations can save time and space, but they're risky