//exercise 1
let a =1
//a = 1
console.log(a)
let b = a++;
//b=1
console.log(b)
let c = ++a;
//c=3
console.log(c)
let d = "hello";
//d='hello'
console.log(d)
let e = false;
//e=false
console.log(e)
d++;
//NaN
console.log(d)
e++;
//e=1
console.log(e)
let perplexed;
perplexed + 2;
//undefined
console.log(perplexed)
let price=2.7;
price.toFixed(2)
//2.70
console.log(price.toFixed(2))
// let price = "2.7";
// price.toFixed(2);
isNaN(0)
//false
console.log(isNaN(0))
isNaN(1)
//false
console.log(isNaN(1))
isNaN("")
//false
console.log(isNaN(""))
isNaN("string")
//true
console.log(isNaN("string"))
isNaN("0")
//false
console.log(isNaN("0"))
isNaN("1")
//false
console.log(isNaN("1"))
isNaN("3.145")
//false
console.log(isNaN("3.145"))
isNaN(Number.MAX_VALUE)
//false
console.log(isNaN(Number.MAX_VALUE))
isNaN(Infinity)
//false
console.log(isNaN(Infinity))
isNaN("true")
//true
console.log(isNaN("true"))
isNaN(true)
//false
console.log(isNaN(true))
isNaN("false")
//true
console.log(isNaN("false"))
isNaN(false)
//false
console.log(isNaN(false))

!true;
//false;
console.log(!true);

!false;
//true;
console.log(!false);

!!true;
//true;
console.log(!!true);

!!false;
//false;
console.log(!!false);

!!0;
//true;
console.log(!!0);

!!-0;
//false;
console.log(!!-0);

!!1;
//true;
console.log(!!1);

!!-1;
//true;
console.log(!!-1);

!!0.1;
//true;
console.log(!!0.1);

!!"hello";
//true;
console.log(!!"hello");

!!"";
//false;
console.log(!!"");

!!'';
//false;
console.log(!!'');

!!"false";
//true;
console.log(!!'false');

!!"0";
//true;
console.log(!!"0");

//exercise 2

let sample = "Hello Codeup";
console.log(sample);
console.log(sample.length);
console.log(sample.toLowerCase());
//Concatenate sample to add Students
sample = sample + " Students";
console.log(sample);
//replace students with class
sample = sample.replace("Students", "Class");
console.log(sample);
//index of lower case c - will not return a valid result
console.log(sample.indexOf("c"));
//index of upper case C
console.log(sample.indexOf("C"));
//retrieve a substring with a value of codeup
let sample2 = sample.substring(sample.indexOf("C"),1 + sample.indexOf("p"));
console.log(sample2);

//exercise 3
//Movie rentals
let merm = 3;
let bear = 5;
let herc = 1;
let movietotal = (merm + bear + herc) * 3
console.log(`The total price for rentals is $${movietotal}`);

//contract pay
let goog = 400 * 6;
let amaz = 380 * 4;
let face = 350 * 10;
let pay = goog + amaz + face;
console.log(`Total pay is $${pay}`);

//password processing
let username = 'codeup';
let password = 'notastrongpassword';
console.log(password.length >= 5);
console.log(password.includes(username) == false);
console.log(username.length <= 20);

let whiteSpace = (username.trim() === username) && (password.trim() === password)











