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
!true
//false
!false
//true
!!true
//true
!!false
//true
!!0
//true
!!-0
//false
!!1
//true
!!-1
//true
!!0.1
//true
!!"hello"
//true
!!""
//false
!!''
//false
!!"false"
//true
!!"0"
//true