var message = 'cat hello whhaaathtatat ahelaha'; 

//O(n) time and space

var reverseWords = function(string) {
  var words = string.split(' ');
  console.log(words); 

  for (var i = 0; i < words.length / 2; i++) {
    var backIndex = words.length - i - 1; 

    var temp = words[i]; 
    words[i] = words[backIndex]; 
    words[backIndex] = temp; 
  }

  return words.join(' ').toString(); 
};