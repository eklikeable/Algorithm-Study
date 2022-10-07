//[1]
var nums = [100, 200, 300, 400, 500];
nums.splice(3, 5);
console.log(nums); // [ 100, 200, 300 ]

//[2]
var nums = [100, 200, 300, 400, 500];
nums = nums.slice(0, 3);
console.log(nums); // [ 100, 200, 300 ]
