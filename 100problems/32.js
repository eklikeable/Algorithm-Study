const input = '안녕하세요. 저는 제주대학교 컴퓨터공학전공 혜림입니다.';
let cnt = 1;
for (let i of input) {
    if (i === ' ') cnt += 1;
}
console.log(cnt);

/** 
 * 답안

const string = prompt('문자열을 입력하세요.').split(' ');
console.log(string.length);
*/
