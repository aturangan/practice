function Stack() {
  this.items = []; 
}

Stack.prototype.push = function(item) {
  this.items.push(item); 
};

Stack.prototype.pop = function() {
  if (!this.items.length) return null; 
  return this.items.pop(); 
};

Stack.prototype.peek = function() {
  if (!this.items.length) return null; 
  return this.items[this.items.length - 1];
};

function MaxStack() {
  this.stack = new Stack(); 
  this.maxesStack = new Stack(); 
}

MaxStack.prototype.push = function(item) {
  this.stack.push(item);
  if (!this.maxesStack.peek() || item >= this.maxesStack.peek()) {
    this.maxesStack.push(item); 
  }
};

MaxStack.prototype.pop = function() {
  let item = this.stack.pop(); 
  if (item === this.maxesStack.peek()) {
    this.maxesStack.pop(); 
  }
  return item; 
};

MaxStack.prototype.getMax = function() {
  return this.maxesStack.peek(); 
};

