/**
 * @param {number[]} plants
 * @param {number} capacity
 * @return {number}
 */
 var wateringPlants = function(plants, capacity) {

  var steps = 1;
  var currentcap = capacity;

  for(i=0; i<plants.length; i++) {
    if(currentcap < plants[i+1]) {
      steps += (i*2)
      currentcap = capacity;
    }

    steps+=(i+1)
    currentcap -= plants[i]
  }

  return steps
};

const plants = [2,2,3,3];
const plants2 = [1,1,1,4,2,3]
const plants3 = [3,2,4,2,1]
const capacity = 5;
const capacity2 = 4;
const capacity3 = 6;

console.log(wateringPlants(plants3, capacity3));
