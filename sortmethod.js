// sort method : it is used to arrange the elements in the ascending order.

let arr = [3,4,5,2,8,9,1];
console.log(arr.sort());

// this does not work if the elemnts contains more than one digit numbers , so  we use arrow function to convert into ascending or desciding order.

let arr1 = [9,8,3,2,1,11,32,543];
console.log(arr1.sort((a,b) => a-b) );
console.log(arr1.sort((a,b) => b-a));