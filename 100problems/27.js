const keys = 'Yujin Hyewon'.split(' ');
const values = '70 100'.split(' ');
let print = {};
for (let i = 0; i < keys.length; i++) {
    print[keys[i]] = parseInt(values[i], 10);
}
console.log(print);
