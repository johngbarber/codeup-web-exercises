// 'use strict';
//
// function heading(str) {
//     let heading1= '<h1>';
//     heading1 += str + '</h1>';
//     return heading1;
// }
// console.log(heading("Hello World!"));
let arr = [1, 2, 3, 4, 5, 6, ]
function unorderedList(arr) {
    let ul = '<ul>';
    for (let i = 0; i < arr.length; i++) {
        ul += '\n' + '<li>' + arr[i] + '</li>' + '\n';
    }
    ul += '</ul>';
    return ul;
}

console.log(unorderedList(arr));
