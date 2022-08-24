function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    while (left.length) {
        mergeSort(left);
    }
    while (right.length) {
        mergeSort(right);
    }

    return result;
}

const array = '10,73,2,24,76,15'.split(',').map((n) => parseInt(n, 10));

console.log(mergeSort(array));
