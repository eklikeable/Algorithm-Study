const numbers = '1 3 2 5 4'.split(' ').sort((a, b) => {
    return a - b;
});
let isOne = false;

for (let i = 0; i < numbers.length - 1; i++) {
    if (parseInt(numbers[i + 1], 10) - parseInt(numbers[i], 10) === 1) {
        isOne = true;
    } else {
        isOne = false;
        break;
    }
}
isOne ? console.log('YES') : console.log('NO');
