function playNumbers(num, repeat) {
    let result = [];
    const arr = num.split('');
    // 중복을 제거한 숫자 배열 uniqueArr생성
    let uniqueArr = [];
    arr.filter((x) => {
        if (!uniqueArr.includes(x)) {
            uniqueArr.push(x);
        }
    });
    //1부터 순서대로 카운팅하기위해 sort해줌
    uniqueArr.sort((a, b) => a - b).join();
    let cnt = 0;
    for (let i = 0; i < uniqueArr.length; i++) {
        for (let j = 0; j < num.length; j++) {
            if (uniqueArr[i] === num[j]) {
                cnt += 1;
            }
        }
        //"unique[i]가 cnt개"를 result에 누적하여 붙임
        result = result.concat(uniqueArr[i].concat(cnt));
        //다음unique[i]를 세야하므로 cnt 초기화
        cnt = 0;
    }
    repeat -= 1;
    result = result.join('');
    if (repeat === 1) {
        return console.log(result);
    }
    playNumbers(result, repeat);
}

let howManyTimes = 7;
playNumbers('1', howManyTimes);
