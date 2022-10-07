const route = [];

function hanoi(num, start, end, temp) {
    //원판이 한 개일 때에는 바로 옮기면 된다(종료조건)
    if (num === 1) {
        route.push([start, end]);
        return NaN;
    }
    //원반 n-1개를 start → temp
    hanoi(num - 1, start, temp, end);
    //가장 큰 원반을 start → end
    route.push([start, end]);
    //나머지 원반들을 temp → end
    hanoi(num - 1, temp, end, start);
}

hanoi(5, 'A', 'C', 'B');
console.log(route);
console.log(route.length); // 원판을 움직인 횟수 : 2^n-1
