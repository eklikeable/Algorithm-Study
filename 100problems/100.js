/**
 * 문제 100 - 퍼즐게임
 * rotateBox() - 퍼즐의 점수를 나타낸 2차원 배열을 인자로 받아,
 *               오른쪽으로 90도를 돌린 배열을 반환하는 함수
 * @param {number[][]} box - 퍼즐의 점수를 나타낸 2차원 배열
 * @returns {number[][]} new_box - 오른쪽으로 90도 돌린 배열
 */
function rotateBox(box) {
    var box_max_index = box.length - 1;
    var new_box = [];
    for (var i = 0; i < box[0].length; i++) {
        var row = [];
        for (var k = 0; k < box.length; k++) {
            row.push(0);
        }
        new_box.push(row);
    }
    for (var i = 0; i < box.length; i++) {
        for (var k = 0; k < box[i].length; k++) {
            var after_row = k;
            var after_col = box_max_index - i;
            new_box[after_row][after_col] = box[i][k];
        }
    }
    return new_box;
}

const box = [
    [0, 0, 0, 0],
    [0, 1, 0, 3],
    [2, 5, 0, 1],
    [2, 4, 4, 1],
    [5, 1, 1, 1],
];
const 조작 = [1, 1, 1, 1, 3, 3, 3];

const new_box = rotateBox(box);

console.log(new_box);
let myPlate = [];
