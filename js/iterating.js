(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    const names = ['John', 'Tiffany', 'Ivan', 'Eugenia']
    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log(names.length)
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log(names[0]); // 1
    console.log(names[1]); // 2
    console.log(names[2]); // 3
    console.log(names[3]); // 4
    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    for (let i = 0; i < names.length; i++) {
        console.log('The name at index ' + i + ' is: ' + names[i]);
    }
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    names.forEach(name => console.log(`Here is a lovely name: ${name}.`));
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
    //first index return
    function firstItem(arr) {
        return arr.length > 0 ? arr[0] : undefined
    }
    //second index return
    function secondItem(arr) {
        return arr.length > 1 ? arr[1] : undefined
    }
    //third index return
    function lastItem(arr) {
        return arr.length > 0 ? arr[arr.length - 1] : undefined;
    }

    const myArray = [1, 2, 3, 4, 5];

    console.log(firstItem(myArray)); // 1
    console.log(secondItem(myArray)); // 2
    console.log(lastItem(myArray)); // 5

    let last  = array => array[array.length-1];

    let second = array => array[1];

    let first = array => array[0];


    console.log(last(myArray));
    console.log(first(myArray));
    console.log(second(myArray));

})();