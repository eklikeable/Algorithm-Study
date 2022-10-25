function solution(n) {
  let theirNumber = [];
  for (let i = 1; theirNumber.length <= 100; i++) {
    if (i % 3 === 0 || String(i).includes(3)) {
      continue;
    } else {
      theirNumber.push(i);
    }
  }
  return theirNumber[n - 1];
}

console.log(solution(100));
console.log(solution(40));
console.log(solution(15));
