function solution(inputArray) {
  const abs = []
  for(i=0; i<inputArray.length-1;i++) {
    let temp = Math.abs(inputArray[i]-inputArray[i+1]);
    abs.push(temp)
  }

  console.log(abs)
  return Math.max(...abs)
}

const inputArray = [2, 4, 1, 0]
solution(inputArray)