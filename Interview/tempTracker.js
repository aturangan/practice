function TempTracker() {
  this.totalLength = 0; 
  this.totalSum = 0; 
  this.minTemp = null; 
  this.maxTemp = null; 

  this.occurrences = {}; 
  this.maxOccurrences = 0; 
  this.mode = null; 
}

TempTracker.prototype.insert = function(temp) {
  if (this.occurrences[temp]) {
    this.occurrences[temp]++; 
  } else {
    this.occurrences[temp] = 1; 
  }

  if (this.occurrences[temp] && this.occurrences[temp] > this.maxOccurrences) {
    this.maxOccurrences = this.occurrences[temp];
    this.mode = temp; 
  } 

  this.totalLength++;
  this.totalSum += temp; 

  if (this.maxTemp < temp || this.maxTemp === null) {
    this.maxTemp = temp; 
  }

  if (this.minTemp > temp || this.minTemp === null) {
    this.minTemp = temp; 
  }
};

TempTracker.prototype.getMax = function() {
  return this.maxTemp; 
}; 

TempTracker.prototype.getMin = function() {
  return this.minTemp; 
};

TempTracker.prototype.getMean = function() {
  return this.totalSum / this.totalLength; 
};

TempTracker.prototype.getMode = function() {
  return this.mode; 
};

