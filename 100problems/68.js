function busWaiting(timeTable, currentTime) {
    let result = [];
    for (let e of timeTable) {
        let time = new Date(`2022-01-01 ${e}`);
        const now = new Date(`2022-01-01 ${currentTime}`);

        if (time - now < 0) {
            result.push('지나갔습니다');
        } else {
            let 남은시간 = String(
                Math.floor((time - now) / 1000 / 60 / 60)
            ).padStart(2, 0);
            let 남은분수 = 60 + (time.getMinutes() - now.getMinutes());
            result.push(`${남은시간}시간 ${남은분수}분`);
        }
    }
    return result;
}
console.log(busWaiting(['12:30', '13:12', '14:13'], '12:40'));
