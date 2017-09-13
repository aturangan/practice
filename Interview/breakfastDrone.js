// Given the array of IDs, which contains many duplicate integers 
// and one unique integer, find the unique integer.

// The IDs are not guaranteed to be sorted or sequential. 
// Orders aren't always fulfilled in the order they were received, 
// and some deliveries get cancelled before takeoff.

//O(n) Time, O(n) Space
let findUnique = (ids) => {
  let freqs = {}; 
  let possibleUnique; 

  for (let i = 0; i < ids.length; i++) {
    let current = ids[i]; 

    if (freqs.hasOwnProperty(current)) {
      freqs[current]++; 
    } else {
      freqs[current] = 1; 
    }
  }

  for (let id in freqs) {
    if (freqs[id] === 1) {
      return parseInt(id); 
    }
  }

  return 'No Unique IDs Found';
};

//solution using XOR 
//O(n) Time, O(1) Space
let findUniqueDeliveryId = (deliveryIds) => {
  let uniqueId = 0; 

  deliveryIds.forEach((deliveryId) => {
    uniqueId ^= deliveryId; 
  });

  return uniqueId;
};