/**
 * 문제 99 : 토끼들의 행진
 * @param {array} 돌의내구도 - 토끼가 착지할 때마다 돌의 내구도는 1씩 줄어듬
 * @param {array} 토끼의점프력 - 각 토끼는 숫자만큼의 칸 씩 점프한다
 *                ex) [2,1]: 첫번째 토끼는 2칸씩, 두번째 토끼는 1칸씩 점프
 * @return {array} result - 대기 중인 토끼들의 통과 여부
 */

function 토끼들의행진(돌의내구도, 토끼의점프력) {
    let result = [];
    for (let i = 0; i < 토끼의점프력.length; i++) {
        const 징검다리수 = 돌의내구도.length;
        for (let j = 1; j <= 징검다리수; j++) {
            let index = j * 토끼의점프력[i] - 1;
            if (index < 징검다리수) {
                돌의내구도[index] -= 1;
                if (돌의내구도[index] < 0) {
                    result.push('fail');
                    break;
                }
            }
        }
        if (result[i] === undefined) {
            result.push('pass');
        }
    }
    return result;
}

let 돌의내구도 = [1, 2, 1, 4, 5, 2];
let 토끼의점프력 = [2, 1, 3, 1];

console.log(토끼들의행진(돌의내구도, 토끼의점프력));
