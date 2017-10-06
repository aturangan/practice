let appearsTwice = (numbers) => {
  let n = (numbers[0] + numbers[numbers.length - 1]) - 1;
  let sumToN = (Math.pow(n, 2) + n) / 2; 
  let sumOfInput = 0; 

  for (let i = 0; i < numbers.length; i++) {
    sumOfInput += numbers[i]; 
  }

  return sumOfInput - sumToN; 
};