function solution(num, total) {
  const array = [];
  let number = -50;
  let flag = true;
  while (flag) {
    if (array.length === num) {
      array.shift();
    }
    array.push(number++);
    let compare = array.reduce((acc, cur) => acc + cur, 0);
    if (total === compare) flag = false;
  }
  return array;
}

console.log(solution(3, 12));
console.log(solution(5, 15));
console.log(solution(4, 14));
console.log(solution(5, 5));
