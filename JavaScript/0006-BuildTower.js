/*Build Tower by the following given argument: number of floors (integer and always greater than 0).
For example, a tower of 3 floors looks like below:
[
  '  *  ', 
  ' *** ', 
  '*****'
]*/

function towerBuilder(nFloors) {
    var maxWidth = (nFloors * 2) - 1;
    var tower = [];
    for(var floor = 1; floor <= nFloors; floor ++){
      tower.unshift(floorBuilder(maxWidth,floor));
    }
    return tower; 
  }
  
  function floorBuilder(maxWidth, floor) {
    var starFloor = '';
    for(var space = 0; space < (floor - 1); space ++){
      starFloor += ' ';
    }
    for(; space < maxWidth - (floor -1); space ++){
      starFloor += '*';
    }
    for(; space < maxWidth; space ++){
      starFloor += ' ';
    }
    return starFloor;
  }