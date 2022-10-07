let input = 'abcdddbeaebd바나나나';
input = input.split('').sort().join('');
let pointer = 0;
let cnt = 1;
let arr = '';
for (let i = pointer; i < input.length; i++) {
    if (input[i] === input[i + 1]) {
        cnt++;
    } else {
        pointer = i + 1;
        arr += input[i] + String(cnt);
        cnt = 1;
    }
}
console.log(arr);
