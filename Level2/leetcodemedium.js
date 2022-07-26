// var truncateSentence = function(s, k) {
//     var map = new Map();
//     map.set(1, 'hello')
//     map.set(2, 'world')

//     // console.log(s.split(' ').slice(0,k).join(' '))
//     // slice (literally slices array from index to index)
//     // join appends items of array onto string separated by param ()
//     // return s.split(' ').slice(0,k).join(' ')

//     // console.log(map.slice(0, 1))
// };


// const s = "What is the solution to this problem"
// const k = 4
// truncateSentence(s,k)


var numOfStrings = function(patterns, word) {
    // var count = 0;
    // const set = new Set();
    // for(i=0; i<word.length; i++) {
    //     for(j=1; j<word.length+1; j++) {
    //         let sub = word.substring(i,j)
    //         set.add(sub)
    //     }
    // }

    // for(i=0; i<patterns.length; i++) {
    //     if(set.has(patterns[i])) {
    //         count++
    //     }
    // }
    // return count

    var count = 0;
    for(const char of patterns) {
        if(word.includes(char)) {
            count++
        } else {
            count+=0
        }
    }

    console.log(count)
};

const patterns = ["a","abc","bc","d"]
const patterns2 = ["a","b","c"]
const words = "abc"
const words2 = "aaaaabbbbb"


