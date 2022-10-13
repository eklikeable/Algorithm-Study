function uniqueClothes(notes) {
    const numbers = [];
    const memo = notes.split(' ');
    memo.filter((e) => {
        if (memo.indexOf(e) % 2 === 1) {
            for (let i of e) {
                if (parseInt(i) * 1 === parseInt(i) && !numbers.includes(i)) {
                    numbers.push(i);
                }
            }
        }
    });
    return console.log(numbers);
}

uniqueClothes('1번: 3,1 2번: 4 3번: 2,1,3 4번: 2,1,3,4');
