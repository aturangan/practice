function BinaryTreeNode(value) {
  this.value = value; 
  this.left = null; 
  this.right = null; 
}

BinaryTreeNode.insertLeft = function(value) {
  this.left = new BinaryTreeNode(value); 
  return this.left; 
}; 

BinaryTreeNode.insertRight = function(value) {
  this.right = new BinaryTreeNode(value); 
  return this.right; 
};

const findLargest = (node) => {
  let current = node; 
  while (current) {
    if (!current) return current.value; 
    current = current.right; 
  }
};

const findSecondLargest = (node) => { 
  if (!node || (!node.left && !node.right)) {
    throw new Error('Tree Must Have at Least 2 Nodes');
  }

  let current = node; 

  while (current) {
    //case: current is largest and has a left subtree 
    //2nd largest is largest in that left subtree
    if (current.left && !current.right) {
      return findLargest(current.left); 
    }

    //if no left or right subtree
    if (current.right && !current.left && !current.right.right) {
      return current.value; 
    }

    current = current.right; 
  }
};