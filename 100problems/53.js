// π‘ κ°―μκ° κ°μΌλ©΄μ, ν­μ λ§¨ μμ "(" λ§¨ λ€λ ")" μ΄μ΄μΌ ν¨

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
