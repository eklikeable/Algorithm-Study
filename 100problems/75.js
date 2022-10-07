/* function game369(input) {
    let cnt = 0;
    if (input < 10) {
        for (let i = 1; i <= input; i++) {
            if (i % 3 === 0) {
                cnt += 1;
            }
        }
        return cnt;
    } else {
        for (let i = 1; i <= input; i++) {
            const numbers = String(i).split('');
            if (numbers[0] % 3 === 0 && numbers[1] % 3 === 0) {
                cnt += 1;
            }
        }
        return cnt;
    }
}
console.log(game369(93));
*/

function game369(input) {
    let cnt = 0;
    for (let num = 1; num <= input; num++) {
        const nums = String(num).split('');
        if (
            parseInt(nums[0], 10) % 3 === 0 &&
            (nums[1] === undefined ||
                nums[1] === '3' ||
                nums[1] === '6' ||
                nums[1] === '9')
        ) {
            cnt += 1;
        }
    }
    return cnt;
}
console.log(game369(36)); // 5
console.log(game369(93)); // 10
