// const activities = [
//     ['Work', 9],
//     ['Eat', 1],
//     ['Commute', 2],
//     ['Play Game', 1],
//     ['Sleep', 7]
// ];

// // activities.splice(1, 0, ['test', 3])
// // console.table(activities)
// // console.log(activities)
// // console.log(activities[0][0])

// activities.forEach(activity => {
//     const [task, hour] = activity;
//     if(hour >= 2) {
//         activity[2] = 'Big Task'
//     } else {
//         activity[2] = 'Small Task'
//     }
// })

const matrix = [];
const row = 6; // m rows
const col = 3; // n cols

// Drawing/Creating a matrix m * n
for (i = 0; i < row; i++) {
  matrix[i] = [];
  for (j = 0; j < col; j++) {
    matrix[i][j] = "*";
  }
}

// console.log(matrix)

/**
 *
 * matrix diagonal sum
 *
 */

var diagonalSum = function (mat) {
  const set = new Set();
  const map = new Map();
  const row = mat.length;
  const col = mat[0].length;
  // This for traversing a standard m x n matrix
  var sum = 0;
  var coord = [];
  var n = 0;
  var m = 0;
  for (i = 0; i < row; i++) {
    for (j = 0; j < col; j++) {
      if (i === j) {
        n = i;
        m = j;
        coord = [n, m];
        if (!map.has(coord)) {
          map.set(String(coord), mat[i][j]);
        }
      }
      if (j === col - 1) {
        n = i;
        m = j - i;
        coord = [n, m];
        if (!map.has(coord)) {
          map.set(String(coord), mat[i][j - i]);
        }
      }
    }
  }

  // String() in map makes sure the object as key is unique (because it's a string)
  for (const [key, value] of map) {
    sum += value;
  }

  console.log(sum);
  return sum;
};

// const mat = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// diagonalSum(mat);

/**
 *
 * find minimum element in its row but maximum in its col
 *
 */

var luckyNumbers = function (input) {
  var minRow = Array(input.length)
    .fill()
    .map(() => Array(input[0].length).fill(0));
  var firstMax = 0;
  var lastMax = 0;
  for (i = 0; i < input.length; i++) {
    for (j = 0; j < input[i].length; j++) {
      if (input[i][j] === Math.min(...input[i])) {
        minRow[i][j] = input[i][j];
      }
    }
  }

  console.log(minRow);

  for (i = 0; i < minRow.length; i++) {
    let ftemp = minRow[i][0];
    let ltemp = minRow[i][minRow.length - 1];
    if (firstMax < ftemp) {
      firstMax = minRow[i][0];
    }
    if (lastMax < ltemp) {
      lastMax = minRow[i][minRow.length - 1];
    }
  }

  if (lastMax > 0) {
    return [];
  } else {
    return [firstMax];
  }
};

const input = [
  [3, 7, 8],
  [9, 11, 13],
  [15, 16, 17],
];
const input2 = [
  [7, 8],
  [1, 2],
];
const input3 = [
  [1, 10, 4, 2],
  [9, 3, 8, 7],
  [15, 16, 17, 12],
];
const input4 = [
  [3, 6],
  [7, 1],
  [5, 2],
  [4, 8],
];

const input5 = [[1,10,4,2],[9,3,8,7],[15,16,17,12]]

luckyNumbers(input5);
