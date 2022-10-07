//춘구님 답안
/**
 * 배치할 기호의 값을 지정해놓은 객체
 * @type {Object<string, number>}
 */
const symbol = {
    empty: 0,
    character: 1,
    obstacle: 2,
    wall: 2,
};

/**
 * 주어진 조건에 맞는 지도를 생성하는 함수
 * @param {Object} condition 지도를 만들기 위해 주어진 조건들
 * @param {number} condition.width 지도의 가로 길이
 * @param {number} condition.height 지도의 세로 길이
 * @param {number[]} condition.character 캐릭터 위치
 * @param {number[][]} condition.obstacles 장애물 위치
 * @returns {number[][]} 지도
 */
function makeMap({ width, height, character, obstacles }) {
    // 벽의 두께를 고려해 가로와 세로에 2씩 더한 크기로 지도를 초기화한다.
    const emptyMap = initializeMap(width + 2, height + 2);
    // 벽이 생겼으므로 기존에 주어진 캐릭터와 장애물의 좌표에 벽의 두께만큼 더해준다.
    const adjustedCharacterCoordinates = adjustCoordinates([character], 1);
    const adjustedObstaclesCoordinates = adjustCoordinates(obstacles, 1);
    // 벽을 세울 좌표를 구한다.
    const wallCoordinates = getWallCoordinates(width + 2, height + 2);
    // 빈 지도에 캐릭터, 장애물, 벽을 배치한다.
    const map = emptyMap
        .deploy(symbol.character, adjustedCharacterCoordinates)
        .deploy(symbol.obstacle, adjustedObstaclesCoordinates)
        .deploy(symbol.wall, wallCoordinates);

    // 배치가 완료된 지도를 반환한다.
    return map;
}

/**
 * 지도를 초기화 하는 함수
 * @param {number} width 가로
 * @param {number} height 세로
 * @returns {number[][]} 초기화 된 지도
 */
function initializeMap(width, height) {
    // empty의 값으로 채워진 이중 배열을 만들어 반환한다.
    return Array.from(new Array(height), () =>
        new Array(width).fill(symbol.empty)
    );
}

/**
 * 좌표를 조정하는 함수
 * @param {number[][]} coordinatesArray 조정할 좌표
 * @param {number} adjustment 조정 정도
 * @returns {number[][]} 조정된 좌표
 */
function adjustCoordinates(coordinatesArray, adjustment) {
    // 좌표에 adjustment만큼 더해서 반환한다.
    return coordinatesArray.map((coordinates) =>
        coordinates.map((coordinate) => coordinate + adjustment)
    );
}

/**
 * 벽의 좌표를 만들어 반환하는 함수
 * @param {number} width 지도의 가로 길이
 * @param {number} height 지도의 세로 길이
 * @returns {number[][]} 벽의 좌표
 */
function getWallCoordinates(width, height) {
    // 벽의 좌표를 저장할 변수를 만든다.
    const wallCoordinates = [];
    // 지도의 전체 좌표를 탐색하면서 테두리의 좌표만 배열에 넣는다.
    for (let h = 0; h < height; h++) {
        for (let w = 0; w < width; w++) {
            if (0 < h && h < height - 1 && 0 < w && w < width - 1) continue;
            wallCoordinates.push([h, w]);
        }
    }

    return wallCoordinates;
}

/**
 * 좌표에 배치하는 함수
 * @param {number} target 배치 대상
 * @param {number[][]} coordinatesArray 배치할 좌표
 * @returns {number[][]} 배치된 지도
 */
Array.prototype.deploy = function (target, coordinatesArray) {
    // 배치해야 할 좌표를 순회하면서 지도에서 해당 좌표의 값을 target으로 변경한다.
    coordinatesArray.forEach(
        (coordinates) => (this[coordinates[0]][coordinates[1]] = target)
    );

    return this;
};

const width = 4;
const height = 5;
const character = [0, 0];
const obstacles = [
    [0, 1],
    [1, 1],
    [2, 3],
    [1, 3],
];
const map = makeMap({ width, height, character, obstacles });
map.forEach((row) => console.log(row));
