/**
 * 문제 94 : 페이지 교체 - LRU 알고리즘
 * @param {number} sizeOfMemory - 메모리 크기
 * @param {string} pages - 들어오는 페이지 순서
 * @return {number} 전체 실행시간 (교체o: 6초, 교체x: 1초)
 */

function replacePage(sizeOfMemory, pages) {
    let queue = [];
    let cnt = 0; // 페이지 부재시마다 카운트
    for (let j of pages) {
        if (!queue.includes(j) && queue.length < sizeOfMemory) {
            cnt += 1;
            queue.push(j);
        }
        if (!queue.includes(j)) {
            cnt += 1;
            queue.shift();
            queue.push(j);
        }
        // 93번 풀이에서 아래 3줄 추가
        if (queue.includes(j)) {
            let temp = queue.splice(queue.indexOf(j), 1);
            queue.push(...temp);
        }
    }
    const runtime = cnt * 6 + (pages.length - cnt);
    return console.log(runtime);
}

replacePage(3, 'ABCABCABC');
