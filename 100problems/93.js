/**
 * 문제 93 : 페이지 교체 - FIFO 알고리즘
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
            queue.shift(queue[0]);
            queue.push(j);
        }
    }
    const runtime = cnt * 6 + (pages.length - cnt);
    return console.log(runtime);
}

replacePage(4, 'ABCDABEABCDE');
