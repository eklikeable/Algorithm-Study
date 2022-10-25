function solution(quiz) {
  let answer = [];
  for (let ex of quiz) {
    let expression = ex.split(' ');
    let left = parseInt(expression[0]);
    let right = parseInt(expression[2]);
    let result = 0;
    switch (expression[1]) {
      case '+':
        result = left + right;
        break;
      case '-':
        result = left - right;
        break;
    }
    result === parseInt(expression[4]) ? answer.push('O') : answer.push('X');
  }
  return answer;
}

console.log(solution(['3 - 4 = -3', '5 + 6 = 11']));
console.log(
  solution(['19 - 6 = 13', '5 + 66 = 71', '5 - 15 = 63', '3 - 1 = 2'])
);
