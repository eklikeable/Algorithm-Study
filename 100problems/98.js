/**
 * 문제 98 : 청길이의 패션대회
 * @param {string} notes - 청길이의 기록
 * @return {array} numbers - 중복을 제거한 유니크한 옷의 종류
 */

function uniqueClothes(notes) {
    const numbers = [];
    const memo = notes.split(' ');
    for (let e of memo) {
        if (memo.indexOf(e) % 2 === 1) {
            for (let i of e) {
                i = parseInt(i);
                if (i * 1 === i && !numbers.includes(i)) {
                    numbers.push(i);
                }
            }
        }
    }
    return console.log(numbers);
}

uniqueClothes('1번: 3,1 2번: 4 3번: 2,1,3 4번: 2,1,3,4');
