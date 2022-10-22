function solution(denum1, num1, denum2, num2) {
    const answer = [0, 0];
    const numerator = num1 * denum2 + num2 * denum1;
    const denominator = num1 * num2;
    const getGCD = (a, b) => (a % b ? getGCD(b, a % b) : b);
    const gcd = getGCD(numerator, denominator);
    answer[0] = numerator / gcd;
    answer[1] = denominator / gcd;
    return answer;
}
console.log(solution(1.5, 2, 3.5, 4)); // [13, 8]
console.log(solution(1, 2, 3, 4)); // [5, 4]
console.log(solution(9, 2, 1, 3)); // [29, 6]

// 최대공약수(GCD)
// const getGCD = (a, b) => (a % b === 0 ? b : getGCD(b, a % b));

// 최소공배수(LCM)
// const lcm = (a, b) => a * b / gcd(a, b)
