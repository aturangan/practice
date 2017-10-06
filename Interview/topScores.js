//input: unsorted array of scores, highest possible score
//output: sorted array of scores from highest to lowest

const topScores = (scores, highestPossible) => {
  let counts = []; 
  let sortedScores = []; 

  for (let i = 0; i < highestPossible + 1; i++) {
    counts.push(0);
  }

  scores.forEach((score) => {
    counts[score]++; 
  });

  for (let score = highestPossible; score >= 0; score--) {
    const count = counts[score];

    for (let freq = 0; freq < count; freq++) {
      sortedScores.push(score);
    } 
  }

  return sortedScores;
 };