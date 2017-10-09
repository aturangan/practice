function isSingleRiffle(half1, half2, shuffledDeck) {
  let half1Index = 0;
  let half2Index = 0; 
  let half1MaxIndex = half1.length - 1; 
  let half2MaxIndex = half2.length - 1; 

  for (let i = 0; i < shuffledDeck.length; i++) {
    const card = shuffledDeck[i]; 

    if (half1Index <= half1MaxIndex && card === half1[half1Index]) {
      half1Index++; 
    } else if (half2Index <= half2MaxIndex && card === half2[half2Index]) {
      half2Index++; 
    } else {
      return false; 
    }
  }

  return true; 
}




