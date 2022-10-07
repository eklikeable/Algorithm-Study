const input = 12345678569164;
const array = String(input).split('');
let cnt = 0;
for (let i = array.length - 2; i >= 0; i--) {
    cnt += 1;
    if (cnt % 3 === 0) {
        array[i] = `${array[i]},`;
    }
}
console.log(array.join(''));
