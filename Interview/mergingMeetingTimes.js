//Your company built an in-house calendar tool called HiCal. 
//You want to add a feature to see the times in a day when everyone is available.
//To do this, you’ll need to know when any team is having a meeting. 
//In HiCal, a meeting is stored as objects ↴ with integer properties startTime and endTime.
//These integers represent the number of 30-minute blocks past 9:00am.

const meetings = [
  {startTime: 0,  endTime: 1},
  {startTime: 3,  endTime: 5},
  {startTime: 4,  endTime: 8},
  {startTime: 10, endTime: 12},
  {startTime: 9,  endTime: 10},
]

//   [
//     {startTime: 0, endTime: 1},
//     {startTime: 3, endTime: 8},
//     {startTime: 9, endTime: 12},
// ]

let mergeRanges = (meetings) => {
  let sortedMeetings = meetings.slice().sort(function(a, b) {
    return a.startTime > b.startTime ? 1 : -1; 
  });
  
  let mergedMeetings = [sortedMeetings[0]];
  
  for (let i = 1; i < sortedMeetings.length; i++) {
    let current = sortedMeetings[i]; 
    let lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1];
    
    if (current.startTime <= lastMergedMeeting.endTime) {
      lastMergedMeeting.endTime = Math.max(lastMergedMeeting.endTime, current.endTime); 
    } else {
      mergedMeetings.push(current); 
    }
  }
  
  return mergedMeetings; 
};

mergeRanges(meetings);
