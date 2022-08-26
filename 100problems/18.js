const scores = '20 30 40';
let avg = 0;
const arr = scores.split(' ');
arr.forEach((score) => {
    avg = avg + parseInt(score);
});
console.log(Math.floor(avg / arr.length));
