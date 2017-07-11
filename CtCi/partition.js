var LinkedList = function () {
  this.head = null;
  this.tail = null;
};

LinkedList.prototype.makeNode = function (val) {
  var node = {};
  node.val = val;
  node.next = null;
  return node;
};

LinkedList.prototype.partition = function (val) {
  var lesserThanVal = new LinkedList();
  var greaterThanVal = new LinkedList();
  var iterator = this.head;

  greaterThanVal.addToTail(val);
  
  while (iterator) {
    if (iterator.val < val) {
      lesserThanVal.addToTail(iterator.val);
    } else if (iterator.val > val) {
      greaterThanVal.addToTail(iterator.val);
    }
    iterator = iterator.next;
  }

  //now merge them.
  if (lesserThanVal.head === null) {   
    return greaterThanVal;
  } else {
    var pointer = lesserThanVal.tail;
    pointer.next = greaterThanVal.head;
    lesserThanVal.tail = greaterThanVal.tail;
    return lesserThanVal;
  }
};

LinkedList.prototype.addToTail = function (value) {
  var newTail = this.makeNode(value);

  if (!this.head) {
    this.head = newTail;
  }
  if (this.tail) {
    this.tail.next = newTail;
  }
  this.tail = newTail;
};