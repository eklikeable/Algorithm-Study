//답안
// 소수 구하기
let input = 1000;
let prime = prime_list(input);
/* let isPrime = true;

for (let i = 2; i < 100; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            isPrime = false;
        }
    }
    if (isPrime) {
        prime.push(i);
    }
    isPrime = true;
} 

let val = parseInt(prompt('숫자를 입력하세요:'), 10);
*/
let 골드바흐파티션 = [];

for (let n of prime) {
    if (prime.includes(input - n) && n <= input - n) {
        골드바흐파티션.push([n, input - n]);
    }
}

let 차 = 골드바흐파티션.map((e) => e[1] - e[0]);

let 작은값 = 골드바흐파티션[차.indexOf(Math.min.apply(null, 차))];
let 큰값 = 골드바흐파티션[차.indexOf(Math.max.apply(null, 차))];

console.log(골드바흐파티션);
console.log(작은값);
console.log(큰값);

//에라토스테네스의 체

function prime_list(n) {
    //에라토스테네스의 체 초기화: n개 요소에 True 설정(소수로 간주)
    let sieve = [];
    for (let i = 2; i < n; i++) {
        sieve.push(true);
    }

    //n의 최대 약수가 sqrt(n) 이하이므로 i=sqrt(n)까지 검사
    let m = parseInt(n ** 0.5, 10);
    for (let i = 2; i < m + 1; i++) {
        if (sieve[i] == true) {
            // i가 소수인 경우
            for (let j = i + i; j < n; j += i) {
                // i이후 i의 배수들을 False 판정
                sieve[j] = false;
            }
        }
    }

    // 소수 목록 산출
    let prime = [];
    for (let i = 2; i < n; i++) {
        if (sieve[i] == true) {
            prime.push(i);
        }
    }
    return prime;
}
