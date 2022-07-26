// // 2D matrix target search
// var searchMatrix = function(matrix, target) {
//     // console.log(matrix)

//     for(i=0; i<matrix.length; i++) {
//         for(j=0; j<matrix[i].length; j++) {
//             if(matrix[i][j] === target) {
//                 return true
//             }
//         }
//     }
//     return false;
// };

// const matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]];
// const matrix2 = [[1],[3]]
// const target = 9;
// const target2 = 3
// console.log(searchMatrix(matrix, target))


// var construct2DArray = function(original, m, n) {
//     const answer = []
//     if((n*m) != original.length) {
//         return [];
//     }
    
//     // for(i=0; i<original.length; i++) {
//     //     var temp = []
//     //     temp.push(original[i])
//     //     answer.push(temp)
//     //     if(temp.length >= n) {
//     //         temp = [];
//     //     }
    
//     // }

//     // var temp = []
//     // while(original.length != 0) {
//     //     temp.push(original.shift())
//     //     if(temp.length === n) {
//     //         answer.push(temp)
//     //         temp = []
//     //     }
//     // }

//     for(i=0; i<original.length; i+=n) {
//         answer.push(original.slice(i, i+n))
//     }
    
//     console.log(answer);
    
// };

// const original = [1,2,3,4], m = 2, n = 2
// const original2 = [5]
// const m2 = 3
// const n2 = 1
// construct2DArray(original, m,n)


// shift grid
var shiftGrid = function(grid, k) {
    var arr = grid.flat(),
    len = grid[0].length,
    res = [];

  while (k--) {
    arr.unshift(arr.pop());
  }

  while (arr.length) {
    res.push(arr.splice(0, len));
  }

  console.log(res)
};

const grid = [[1,2,3],[4,5,6],[7,8,9]], k = 1
shiftGrid(grid, k)