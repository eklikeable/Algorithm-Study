const arr = 'ㄱ,ㄴ,ㄷ,ㄹ'.split(',');
const selectNumber = 3;

function getCombination(arr, selectNumber) {
    if (selectNumber === 1) return arr.map((v) => v);
    const result = []; //result배열은 재귀가 돌때마다 초기화 되도록 함수안에 작성
    arr.forEach((v, i) => {
        const rest = arr.slice(i + 1);
        // i번 인덱스는 고정하고, 나머지를 다시 rest에 담아 재귀로 돌림
        const combination = getCombination(rest, selectNumber - 1);
        const attached = combination.map((combies) => `${v}${combies}`);
        result.push(...attached);
    });
    return result;
}

const combi = getCombination(arr, selectNumber);
console.log(combi);
console.log(combi.length);
