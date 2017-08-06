//O(1) time and space

var myRectangle = {
  leftX: 1,
  bottomY: 5,

  width: 10,
  height: 4,
};

var myRectangle2 = {
  leftX: 2,
  bottomY: 5,

  width: 13,
  height: 4,
};

let findOverlap = (point1, length1, point2, length2) => {
  let highestStartPoint = Math.max(point1, point2); 
  let lowestEndPoint = Math.min(point1 + length1, point2 + length2); 

  if (highestStartPoint >= lowestEndPoint) {
    return { startPoint: null, overlapLength: null }
  }

  let overlap = lowestEndPoint - highestStartPoint; 

  return { startPoint: highestStartPoint, overlapLength: overlap }; 
};

let findRectangularOverlap = (rect1, rect2) => {
  const xOverlap = findOverlap(rect1.leftX, rect1.width, rect2.leftX, rect2.width); 
  const yOverlap = findOverlap(rect1.bottomY, rect1.height, rect2.bottomY, rect2.height); 

  if (!xOverlap.overlapLength || !yOverlap.overlapLength) {
    return {
      leftX: null, 
      bottomY: null,
      width: null,
      height: null
    };
  }

  return {
    leftX: xOverlap.startPoint,
    bottomY: yOverlap.startPoint,
    width: xOverlap.overlapLength,
    height: yOverlap.overlapLength
  }; 
};










