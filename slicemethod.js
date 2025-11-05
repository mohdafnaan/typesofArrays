// slice()method : it is used to extract a portion of elements fromm the array by giving their index and lenth.

let arr = ["afnaan","is", "web", "developer"];
//  i         0       1     2        3
//  l         1       2     3        4

console.log(arr.slice(2,4));

let arr1 = [1,2,3,4,5,6,7,8,9,10];

let output = arr1.slice(6,10);

console.log(output.map((x) => x*2));