//Write a function maxDuffelBagValue() that takes an array of cake type objects and 
//a weight capacity, and returns the maximum monetary value the duffel bag can hold.

var cakeTypes = [
  {weight: 7, value: 160},
  {weight: 3, value: 90},
  {weight: 2, value: 15},
];

var capacity = 20;

let maxDuffelBagValue = (cakeTypes, capacity) => {

  var maxValuesAtCapacities = [];
  
  for (var i = 0; i <= weightCapacity; i++) {
    maxValuesAtCapacities[i] = 0;
  }

  for (var currentCapacity = 0; currentCapacity <= weightCapacity; currentCapacity++) {
    var currentMaxValue = 0;

    for (var j = 0; j < cakeTypes.length; j++) {
      var cakeType = cakeTypes[j];

      if (cakeType.weight === 0 && cakeType.value !== 0) {
        return Infinity;
      }

      if (cakeType.weight <= currentCapacity) {
        var maxValueUsingCake = cakeType.value + maxValuesAtCapacities[currentCapacity - cakeType.weight];
        currentMaxValue = Math.max(maxValueUsingCake, currentMaxValue);
      }
    }
     
    maxValuesAtCapacities[currentCapacity] = currentMaxValue;
  }

  return maxValuesAtCapacities[weightCapacity];
};

maxDuffelBagValue(cakeTypes, capacity);