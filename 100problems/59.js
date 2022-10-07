function print(words) {
    const numberOfLine = 50 - words.length;
    let result = '='.repeat(numberOfLine / 2);
    console.log(result + words + result);
    console.log((result + words + result).length);
}
print('hello');
