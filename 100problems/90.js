function findDrugs(ingredients, number) {
    // ingredients에서 나올 수 있는 4가지 조합을 모두 배열에 담고

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let drugs = [];
    let commonWords = [];
    const charLength = 8;
    while (commonWords.length !== number) {
        let newChar = ingredients[Math.floor(Math.random() * 8)];
        if (commonWords.indexOf(newChar) === -1) {
            commonWords.push(newChar);
        }
    }
    console.log(commonWords);
}

findDrugs('ABCDEFGH', 4);
