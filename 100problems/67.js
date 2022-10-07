function handShake(totalHandShake) {
    let people = 0;
    let countHandShakes = 0;
    let temp = 0;
    while (true) {
        // n명이 모두 악수할 때, 악수 횟수 : n(n-1)/2
        countHandShakes = parseInt((people * (people - 1)) / 2, 10);
        if (totalHandShake < countHandShakes) break;
        temp = countHandShakes;
        people += 1; // 1명일 때 부터 1명씩 늘려가면서 체크
        console.log(people, temp);
    }
    //민규의 악수횟수 = totalHandShake - temp
    return [parseInt(totalHandShake - temp, 10), people];
}
console.log(handShake(59)); // [4, 12]
