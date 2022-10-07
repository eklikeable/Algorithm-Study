const input = 'a';
if (input.codePointAt(0) >= 65 && input.codePointAt(0) <= 90) {
    console.log('YES');
} else if (input.codePointAt(0) >= 97 && input.codePointAt(0) <= 122) {
    console.log('NO');
}
