const l = [10, 20, 25, 27, 34, 35, 39]; //기존 입력 값
const n = 2;

function rotate(inL, inN) {
    const copiedL = inL.slice();
    let gap = [];
    for (let i = 0; i < inN; i++) {
        copiedL.unshift(copiedL.pop());
    }
    for (let i = 0; i < l.length; i++) {
        gap.push(Math.abs(l[i] - copiedL[i]));
    }
    const index = gap.indexOf(Math.min.apply(null, gap));

    console.log(`index : ${index}`);
    console.log(`value : ${l[index]}, ${copiedL[index]}`);
}
rotate(l, n);
