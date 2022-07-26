// Medium Difficulty Array Problems
// #2161

var pivotArray = function (nums, pivot) {
  var first = [];
  var middle = [];
  var second = [];
  for (i = 0; i < nums.length; i++) {
    if (nums[i] < pivot) {
      first.push(nums[i]);
    } else if (nums[i] === pivot) {
      middle.push(nums[i]);
    } else {
      second.push(nums[i]);
    }
  }

  //   console.log(first.concat(middle).concat(second))
  return first.concat(middle).concat(second);
  // var first = [];
  // var last = [];
  // for(i=0; i<nums.length; i++) {
  //     if(nums[i] < pivot) {
  //         first = [...first, nums[i]]
  //     } else if (nums[i] === pivot) {
  //         last = [nums[i], ...last]
  //     } else {
  //         last = [...last, nums[i]]
  //     }
  // }

  // console.log(first)
  // console.log(last)
  // return first.concat(last)
};

// const nums = [9, 12, 5, 10, 14, 3, 10];
// const pivot = 10;
// pivotArray(nums, pivot);

// var processQueries = function(queries, m) {
//     var compare = Array.from({length: m}, (_, i) => i + 1)
//     var answer = []

//     for(i=0; i<queries.length; i++) {
//         for(j=0; j<compare.length; j++) {
//             if(queries[i] === compare[j]) {
//                 let temp = compare[j]
//                 answer.push(j)
//                 compare.splice(j, 1)
//                 compare = [temp, ...compare]
//             }
//         }
//     }

//     return answer

// };

// const queries = [3,1,2,1]
// const m = 5;
// processQueries(queries, m)

// var rearrangeArray = function(nums) {
//     const pos = []
//     const neg = []
//     const answer = [];

//     for(i=0; i<nums.length; i++) {
//         if(nums[i] >= 0) {
//             pos.push(nums[i])
//         } else {
//             neg.push(nums[i])
//         }
//     }

//     for(i=0; i<pos.length; i++) {
//         answer.push(pos[i])
//         answer.push(neg[i])
//     }

//     console.log(answer)
//     return answer

// };

// const nums = [3,1,-2,-5,2,-4]
// rearrangeArray(nums)

// var minPairSum = function(nums) {
//     var answer = 0;
//     const sortedArray = nums.sort((a,b) => {
//         return a-b
//     })
//     var max = 0;
//     // for(i=0; i<nums.length/2; i++) {
//     //     var max = Math.max(...nums);
//     //     var min = Math.min(...nums)
//     //     answer = max+min
//     //     nums.splice(nums.indexOf(max))
//     //     nums.splice(nums.indexOf(min))

//     // }

//     // for(i=0; i<sortedArray.length/2; i++) {
//     //     temp = sortedArray[i] + sortedArray[sortedArray.length-1-i]
//     //     if(max < temp) {
//     //         max = temp;
//     //     }
//     // }
//     while(sortedArray.length > 0) {
//         temp = sortedArray.shift() + sortedArray.pop();
//         if(max < temp) {
//             max = temp
//         }
//     }

//     console.log(max)
//     return max
// };

// const nums = [3,5,4,2,4,6]
// const nums2 = [4,1,5,1,2,5,1,5,5,4] // (5,1) (5,1) (5,1) (5,2) (4,4) -> 6 6 6 7 8
// const nums3 = [3,5,2,3] // 2 3 3 5
// minPairSum(nums2);

// var arrayStringsAreEqual = function(word1, word2) {
//     var answer1 = word1.join('')
//     var answer2 = word2.join('')

//     console.log(answer1 === answer2)
//     return answer1 === answer2

// };

// const word1 = ["ab", "c"], word2 = ["a", "bc"]
// arrayStringsAreEqual(word1, word2)

// var countKDifference = function (nums, k) {
//   var count = 0;
//   for (i = 0; i < nums.length; i++) {
//     for (j = i + 1; j < nums.length; j++) {
//       if (Math.abs(nums[i] - nums[j]) === k) {
//         count++;
//       }
//     }
//   }

//   console.log(count);
// };

// const nums = [3, 2, 1, 5, 4];
// const nums2 = [1,2,2,1]
// const k = 2;
// const k2 = 1
// countKDifference(nums, k);
