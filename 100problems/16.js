const input = '거꾸로';
let output = '';
for (i = input.length - 1; i >= 0; i--) {
    output = output.concat('', input[i]);
}
console.log(output);
