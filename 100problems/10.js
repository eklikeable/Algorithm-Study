const n = 5;
const num = 5;
for (let i = 1; i <= num; i++) {
    let blank = ' '.repeat(num - i);
    let star = '*'.repeat(2 * i - 1);
    console.log(blank, star);
}
