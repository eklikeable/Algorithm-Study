let input = 1000;
let cnt = 0;
for (let i = 0; i <= input; i++) {
    let number = String([i]).split('');
    for (let j = 0; j < number.length; j++) {
        if (number[j] === '1') {
            cnt += 1;
        }
    }
}
console.log(cnt);
