// some()method : 
//           prints true : if anyone element meets the condition.
//           prints false: if no element meets the condition prints false.

let arr = [1,2,3,4,5,6,7,8,9,10];
// console.log((x)=> x%2==0); //DOES NOT GET THE OUTPUT  BY THIS METHOD .HAVE TO CREATE A VARIABLE.
let output = arr.some((z) =>z%2 == 0);
console.log(output);

output = arr.some((x) => x%1==0);
console.log(output);

output = arr.some((x)=> x>11);
console.log(output);