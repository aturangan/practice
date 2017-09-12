let rotationPoint = (words) => {
  const firstWord = words[0]; 

  let floorIndex = 0; 
  let ceilingIndex = words.length - 1; 

  while (floorIndex < ceilingIndex) {
    let halfIndex = Math.floor((floorIndex + ceilingIndex) / 2);

    if (words[halfIndex] > words[floorIndex]) {
      floorIndex = halfIndex; 
    } else {
      ceilingIndex = halfIndex; 
    }

    if (floorIndex + 1 === ceilingIndex) {
      break; 
    }
  }

  return ceilingIndex; 
};