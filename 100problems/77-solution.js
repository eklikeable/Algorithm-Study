// 주어진 문자열로 만들 수 있는 모든 경우의 수를 배열로 담음
function sol(string) {
    let result = [];
    for (let i = 1; i < string.length + 1; i++) {
        for (let j = 0; j < i; j++) {
            result.push(string.slice(j, j + string.length - i + 1));
        }
    }
    return result;
}

const inputOne = 'THISISSTRINGS';
const inputTwo = 'THISIS';

//공통 부분 문자열 찾기- 교집합
let intersection = arrayOne.filter((x) => arrayTwo.includes(x));

//문자열 길이로 내림차순 정렬
intersection.sort((a, b) => {
    return b.length - a.length;
});

console.log(intersection[0].length);
