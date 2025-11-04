// every() method : checks if the condition given satisfies to all the elements in the array it prints "true".., if the anyone of the element do not satisfy the condition it prints "false"

let arr = [2,3,4,5,8,12];
console.log(arr.every((x) => x>10)); // output is false because there is no element greater than 10.

let output = arr.every((x)=> x<10); // output is true as all the elments are lesser than 10
console.log(output); 

let arr1 = ["afnaan","afnaan","afnaan"];
console.log(arr1.every((x) => x == "afnaan"));
console.log(arr1.every((a) => a!= "faimeena"));

