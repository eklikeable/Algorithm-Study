const nationWidth = {
    korea: 220877,
    Russia: 17098242,
    China: 9596961,
    France: 543965,
    Japan: 377915,
    England: 242900,
};

const w = nationWidth['korea'];

delete nationWidth['korea'];

const entry = Object.entries(nationWidth);
const values = Object.values(nationWidth);
//gap에 최댓값 저장
let gap = Math.max.apply(null, values);
let item = [];

for (let i in entry) {
    if (gap > Math.abs(entry[i][1] - w)) {
        gap = Math.abs(entry[i][1] - w);
        console.log(gap);
        item = entry[i];
        console.log(item);
    }
}

console.log(item[0], item[1] - w);
