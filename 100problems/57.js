/* let input = 1000;

let cnt = 0;
for (let i = 0; i <= input; i++) {
    let number = String([i]).split('');
    for (let j = 0; j < number.length; j++) {
        if (number[j] === '1') {
            cnt += 1;
        }
    }
}
console.log(cnt); */

// 중첩 for문을 사용하지 않도록!

const input = 1000;
let number = '';
for (let i = 0; i <= input; i++) {
    number += i;
}
let cnt = 0;
for (let a of number) {
    if (a === '1') {
        cnt += 1;
    }
}
console.log(cnt);

// ✨ for in 과 for of 의 차이점

// for in 반복문 : 객체의 모든 열거 가능한 속성에 대해 반복
// => property 반환 (index order가 중요할경우 사용❌)

// for of 반복문 : [Symbol.iterator] 속성을 가지는 컬렉션 전용
// => value 반환
