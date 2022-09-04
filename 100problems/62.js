// 20190923 출력하기
// 조건 1. 코드내에 숫자가 없어야한다
// 조건 2. 파일이름, 경로, 시간, 날짜함수 ❌
// 조건 3. 에러번호 출력 ❌
// 조건 4. Input 사용 ❌

//[답안]
//abcdefgh
//20190923
const user_s = 'aacdddddddddfffffffffgghhh';

console.log(
    `${user_s.match(/a/g).length}${Number(user_s.match(/b/g))}${
        user_s.match(/c/g).length
    }${user_s.match(/d/g).length}${Number(user_s.match(/e/g))}${
        user_s.match(/f/g).length
    }${user_s.match(/g/g).length}${user_s.match(/h/g).length}`
);
