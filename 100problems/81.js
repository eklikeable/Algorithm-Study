const input = '0 1 0 0 0\n0 0 0 0 0\n0 0 0 1 0\n0 0 1 0 0\n0 0 0 0 0';
let flag = []; //지뢰 없이 깃발만 있는 리스트
let minesweeper = []; //지뢰를 찾은 리스트
let count = 0;

// 3*3 영역 안에서, (1,1)에 깃발이 있다면 [(0,1),(1,0),(1,2),(2,1)]에 * 표시

console.log(flag);
console.log(minesweeper);
