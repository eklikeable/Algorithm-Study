function solution(array) {
  var freqOfEl = [];
  // 요소의 빈도수를 세는 이차원 배열 생성 [[element, count]]
  for (let i = 0; i < array.length; i++) {
    let cnt = 1;
    if (array[i] === array[i - 1]) {
      continue;
    }
    for (let j = i + 1; j <= array.length; j++) {
      if (array[i] === array[j]) cnt += 1;
    }
    freqOfEl.push([array[i], cnt]);
  }
  // 빈도수가 높은 순으로 정렬
  freqOfEl.sort((a, b) => b[1] - a[1]);
  // 숫자가 하나밖에 없거나, 같은 빈도수의 숫자가 없으면 그 숫자 그대로 리턴
  if (freqOfEl.length === 1 || freqOfEl[0][1] > freqOfEl[1][1]) {
    return freqOfEl[0][0];
  } else {
    return -1;
  }
}

console.log(solution([1, 2, 3, 3, 3, 4]));
console.log(solution([1, 1, 2, 2]));
console.log(solution([1]));
