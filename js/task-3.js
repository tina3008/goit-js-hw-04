'use strict';
function filterArray(numbers, value) {
   
    const array = [];
    // 1 wave
    // for (let i = 0; i < numbers.length; i++) {
    //     if (numbers[i] > value) {
    //         array.push(numbers[i])
    //     } 
    // }
    // return array

// 2 wave
    for (const i of numbers) {
        if (i > value) {
                    array.push(i)
                }
    }
    return array
 }

   
  


console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]