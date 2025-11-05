// reduce()method : it perform a function with all the elements inside the array and gives a single value
// it returns the value.

// it have accumulator and currentvalue in the parameters of the function by default

//accumulator : stores the previous step
// current value : current array elements.
// initialVCalue : starting value which is to be written in the last of the function.



let numbers = [10,20,30,40,50];
let total = numbers.reduce((acc, cur)=> {
    return acc + cur;
},0);
console.log(total);

total = numbers.slice(0,2);
console.log(total.reduce((x,y) => {
    return x+y
},0));