/**
 * 문제 97 : 택배 배달
 * @param {number} number - 배달원 수
 * @param {array} time - 쌓인 택배 별 배달시간(접수된 순서대로 배송)
 * @return {number} 모든 택배가 배달 완료 될 시간
 */

function solution(number, time) {
    let deliveryMan = [];
    let cnt = 0;

    // 배달원 수에 맞춰 배열 생성
    for (let i = 0; i < number; i++) {
        deliveryMan.push(time.shift());
    }
    // 모든 택배가 상차되었을 경우 종료
    while (time.length !== 0) {
        for (let i = 0; i < number; i++) {
            if (deliveryMan[i] === 0 && time.length !== 0) {
                deliveryMan[i] += time.shift();
            }
        }
        deliveryMan = deliveryMan.map((x) => (x = x - 1));
        cnt += 1;
    }
    // 모든택배 상차 후 남은 배송 중 가장 긴 잔여거리를 더해줌
    cnt += Math.max(...deliveryMan);
    return cnt;
}

const deliveryMan = 3;
const deliveryTime = [1, 2, 1, 3, 3, 3];

console.log(solution(deliveryMan, deliveryTime));
