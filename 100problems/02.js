var arr = [200, 10, 300];
arr.splice(2, 0, 10000);
console.log(arr); //[ 200, 100, 10000, 300 ]
