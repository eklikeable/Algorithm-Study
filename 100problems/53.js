// 💡 갯수가 같으면서, 항상 맨 앞은 "(" 맨 뒤는 ")" 이어야 함

function checkParenthesis(string) {
    let cntLeft = 0;
    let cntRight = 0;

    if (string[0] !== '(' || string[string.length - 1] !== ')') {
        console.log('No');
    } else {
        for (let i = 0; i < string.length; i++) {
            string[i] === '(' ? cntLeft++ : cntRight++;
        }
    }
    cntLeft === cntRight ? console.log('YES') : console.log('NO');
}

checkParenthesis('())()()');
