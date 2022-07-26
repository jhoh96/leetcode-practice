function solution(numbers, target) {
  var answer = 0;
  var num = numbers.length;
  const dfs = (level, total) => {
    if (level === num) {
        if(total === target) {
            answer++;
        }
        return;
    } else {
        dfs(level+1, total+numbers[level]);
        dfs(level+1, total-numbers[level]);
    }
  };
  
  
  dfs(0, 0);
  console.log(answer);
  return answer;
}

const numbers = [1, 1, 1, 1, 1];
const target = 3;
const numbers2 = [4, 1, 2, 1];
const target2 = 4;
solution(numbers, target);
