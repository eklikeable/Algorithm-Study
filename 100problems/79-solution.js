function rotate(a, t) {
    let b = a.slice();
    let c = [];
    for (let i = 0; i < t; i++) {
        b.unshift(b.pop());
    }

    for (let i in a) {
        // let i in b 로 해도됩니다.
        c.push(Math.abs(a[i] - b[i]));
    }

    //최솟값
    const m = Math.min.apply(null, c);

    //최솟값의 인덱스 구하기
    let index = c.indexOf(m);

    console.log('index :', index);
    console.log('value :', a[index], b[index]);
}

const l = [10, 20, 25, 27, 34, 35, 39]; //기존 입력 값
const turn = prompt('순회 횟수는?');

rotate(l, turn);
