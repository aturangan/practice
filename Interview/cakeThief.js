//Write a function maxDuffelBagValue() that takes an array of cake type objects and 
//a weight capacity, and returns the maximum monetary value the duffel bag can hold.

var cakeTypes = [
  {weight: 7, value: 160},
  {weight: 3, value: 90},
  {weight: 2, value: 15},
];

var capacity = 20;

const maxDuffelBagValue = (cakeTypes, weightCapacity) => {
  let maxValuesAtCapacities = []; 

  for (let i = 0; i <= weightCapacity; i++) {
    maxValuesAtCapacities[i] = 0; 
  }

  for (let currentCapacity = 0; currentCapacity <= weightCapacity; currentCapacity++) {
    let currentMaxValue = 0; 

    for (let j = 0; j < cakeTypes.length; j++) {
      let cakeType = cakeTypes[j]; 

      if (cakeType.weight === 0 && cakeType.value !== 0) {
        return Infinity; 
      }

      if (cakeType.weight <= currentCapacity) {
        let maxValueUsingCake = cakeType.value + maxValuesAtCapacities[currentCapacity - cakeType.weight];
        currentMaxValue = Math.max(maxValueUsingCake, currentMaxValue);
      }
    }

    maxValuesAtCapacities[currentCapacity] = currentMaxValue; 
  }

  return maxValuesAtCapacities[weightCapacity];
};
