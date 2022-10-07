const a = [1, 2, 3, 4];
const b = ['a', 'b', 'c', 'd'];
let array = [];

for (let i = 0; i < a.length; i++) {
    i % 2 === 0 ? array.push([a[i], b[i]]) : array.push([b[i], a[i]]);
}
console.log(array);
