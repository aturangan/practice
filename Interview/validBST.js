function BinaryTreeNode(value) {
  this.value = value;
  this.left  = null;
  this.right = null;
}

BinaryTreeNode.prototype.insertLeft = function(value) {
  this.left = new BinaryTreeNode(value);
  return this.left;
};

BinaryTreeNode.prototype.insertRight = function(value) {
  this.right = new BinaryTreeNode(value);
  return this.right;
};

BinaryTreeNode.prototype.isValidBST = function(node) {
  let nodeStack = []; 
  nodeStack.push({ node: node, lowerBound: -Infinity, upperBound: Infinity }); 

  //DFS
  while (nodeStack.length) {
    let nodeData = nodeStack.pop(); 
    let node = nodeData.node; 
    let lowerBound = nodeData.lowerBound; 
    let upperBound = nodeData.upperBound; 

    if (node.value <= lowerBound || node.value >= upperBound) {
      return false; 
    }

    if (node.left) {
      //this node must be less than the current node 
      nodeStack.push({ node: node.left, lowerBound: lowerBound, upperBound: node.value });
    }

    if (node.right) {
      //this node must be greater than the current node 
      nodeStack.push({ node: node.right, lowerBound: node.value, upperBound: upperBound });
    }
  }
  
  return true; 
};