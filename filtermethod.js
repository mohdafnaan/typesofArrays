// filter()method : a filter method creates a new array filled with the elements that passes a function with the elements.
// it returns the value.

let arr = [1,2,3,4,5,6,7,8];
console.log(arr.filter((x)=> x>5));


let arr1 = [1,2,3,4,5,6,7,8,9,10];

let output = arr1.filter((x)=> x<10 && x>8); // result : 9
console.log(output.at(0)); // we want the element whose element is zero so its gives 9 ....this is the proof that it will be returned.



let arr2 = [1,2,3,4,5,6,7,8,9,10];
let output1 =arr2.filter((x)=> x%2 == 0);

console.log(output1.map((x)=> x+1));