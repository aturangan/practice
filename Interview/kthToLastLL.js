let kthToLast = (k, head) => {
  if (k < 1) {
    throw new Error('Impossible to find less than first to last node: ' + k); 
  }

  let listLength = 1; 
  let current = head; 

  while (current.next) {
    current = current.next; 
    listLength++; 
  }

  if (k > listLength) {
    throw new Error('k is larger than the length of the linked list: ' + k); 
  }

  const howFarToGo = listLength - k; 

  current = head; 

  for (let i = 0; i < howFarToGo; i++) {
    current = current.next; 
  }

  return currentNode; 
};