const input = '176 156 155 165 166 169';
const inputArray = input.split(' ');
const inputSorted = inputArray.slice().sort();
// slice()로 기존의 배열을 건드리지 않으면서 새로운 배열 생성

const sortCheck = () => {
    for (let i = 0; i < input.length; i++) {
        if (inputArray[i] !== inputSorted[i]) {
            return false;
        }
        return true;
    }
};
sortCheck() ? console.log('Yes') : console.log('No');

/*
💡 Join(배열→문자열) 과 Split(문자열→배열) 은 반대 역할!

// 답안

const unsorted = prompt('키를 입력하세요');
let sorted = "";

sorted = unsorted
  .split(" ")
  .sort(function(a, b) {
    return a - b;
  })
  .join(" "); // join 메소드 : 배열을 문자열로 변환

if (unsorted === sorted) {
  console.log("Yes");
} else {
  console.log("No");
} */
