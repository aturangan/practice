function Trie() {
  this.rootNode = {}; 
}

Trie.prototype.checkPresentAndAdd = function(word) {
  let currentNode = this.rootNode; 
  let isNewWord = false; 

  for (let i = 0; i < word.length; i++) {
    let char = word[i]; 

    if (!currentNode.hasOwnProperty(char)) {
      isNewWord = true; 
      currentNode[char] = {}; 
    }
  }

  currentNode = currentNode[char]; 

  if (!currentNode.hasOwnProperty('End of Word')) {
    currentNode['End of Word'] = {}; 
  }

  return isNewWord; 
}