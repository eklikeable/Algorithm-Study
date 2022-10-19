function solution(dots) {
    let answer = 0;
    let slope = [];
    for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
            let z = (dots[j][1] - dots[i][1]) / (dots[j][0] - dots[i][0]);
            if (!slope.includes(z)) {
                slope.push(z);
            } else {
                answer = 1;
                break;
            }
        }
    }
    return answer;
}

const dots = [
    [1, 4],
    [9, 2],
    [3, 8],
    [10, 4],
];

console.log(solution(dots));
