function checkParenthesis(string) {
    const text = new String(string);
    let cntLeft = 0;
    let cntRight = 0;

    if (text[0] !== '(' || text[text.length - 1] !== ')') {
        console.log('No');
    } else {
        for (let i = 0; i < text.length; i++) {
            if (text[i] === '(') {
                cntLeft++;
            } else {
                cntRight++;
            }
        }
        if (cntLeft === cntRight) {
            console.log('YES');
        } else {
            console.log('NO');
        }
    }
}
checkParenthesis('()()()');
