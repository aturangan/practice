let getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let inPlaceShuffle = (array) => {
  if (array.length <= 1) return; 

  for (let i = 0; i < array.length - 1; i++) {
    let randomIndex = getRandom(i, array.length - 1); 

    if (randomIndex !== i) {
      let temp = array[i]; 
      array[i] = array[randomIndex];
      array[randomIndex] = temp; 
    }
  }

  return array;
};

inPlaceShuffle([1, 2, 3, 4, 5]);