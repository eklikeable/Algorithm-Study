const input = '복잡한 세상 편하게 살자';
const array = input.split(' ');
let output = '';
for (let i of array) {
    output += i[0];
}
console.log(output);
