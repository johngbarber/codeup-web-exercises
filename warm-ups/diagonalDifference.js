'use strict';

const arr = [ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ]
let arr2 = arr.reverse()
console.log(arr2)
function diagonalDifference(arr) {
    // Write your code here
    let n = arr.length;
    let d1 = 0;
    let d2 = 0;

    for (let i=0; i<n; i++){
        for (let j=0; j<n; j++){
         if (i===j){
             d1 += arr[i][j];
         }
         if (i+j === n-1){
             d2 += arr[i][j];
         }
        }
    }
    return Math.abs(d1 - d2)
}
