//completed in O(n) time

var romanToInt = function(s) {
  let sum = 0; 
  
  if (s.indexOf('IV') !== -1) { sum -= 2; }
  if (s.indexOf('IX') !== -1) { sum -= 2; } 
  if (s.indexOf('XL') !== -1) { sum -= 20; } 
  if (s.indexOf('XC') !== -1) { sum -= 20; } 
  if (s.indexOf('CD') !== -1) { sum -= 200; }
  if (s.indexOf('CM') !== -1) { sum -= 200; }
  
  let chars = s.split('');
    
  for (let count = 0; count <= s.length-1; count++) {
    if (chars[count]=='M') sum += 1000;
    if (chars[count]=='D') sum += 500;
    if (chars[count]=='C') sum += 100;
    if (chars[count]=='L') sum += 50;
    if (chars[count]=='X') sum += 10;
    if (chars[count]=='V') sum += 5;
    if (chars[count]=='I') sum += 1;
  }
  return sum;
}

romanToInt('IV');
