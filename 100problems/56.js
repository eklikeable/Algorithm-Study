nationWidth = {
    Korea: 220877,
    Rusia: 17098242,
    China: 9596961,
    France: 543965,
    Japan: 377915,
    England: 242900,
};

// 1. 함수로 만들어서 재사용성을 높인다
// 2. 원본객체를 변경하지 않는다

function findSimilarWidthNation(nation) {
    const { [nation]: standardNationWidth } = nationWidth;
    const compareWidth = Object.entries(nationWidth)
        .filter(([key]) => key != [nation])
        .map(([key, value]) => [key, Math.abs(value - standardNationWidth)]);

    compareWidth.sort((a, b) => {
        if (a[1] < b[1]) {
            return -1;
        }
    });
    return compareWidth[0];
}

console.log(...findSimilarWidthNation('Korea'));
