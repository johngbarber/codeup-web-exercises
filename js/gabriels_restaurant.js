//this will be the array list that is loaded with various restaurants...
const american = ['Mom\'s Burgers & Wings', 'Prairie House Restaurant', 'Bottlecap Alley Icehouse Grill', 'RG Burgers and Grill', 'Rodeo Goat', 'LSA Burger', '940\'s Kitchen & Cocktails', 'Towers Tap House', 'GreenHouse Restaurant', 'Tinman Social']
const asian = ['Fortune Star Chinese & Thai Cuisine', 'Fresh Thai', 'Yum Asian Bistro', 'Hot Wok Cafe', 'Hong Kong Express', 'Hot Spots Eat Fresh', 'Pei Wei Asian Kitchen', 'Tuk-Tuk Thai Kitchen', 'Oriental Garden Restaurant', 'Manee Thai Cuisine & Bar']
const mexican = ['Villa Grande Mexican Restaurant', 'La Cima Mexican Grill', 'Ernesto\'s Fine Mexican Food', 'La Cima Mexican Grill', 'Gimme Taco', 'Los Jalapenos', 'Lucy\'s Bakery & Taco Shop', 'Taco Bueno', 'QDOBA Mexican Eats', 'Torchy\'s Tacos']
const italian = ['Palio\'s Pizza Cafe Crossroads', 'Luigi\'s Pizza And Pasta', 'Roma\'s Pizza & Pasta', 'Olive Garden Italian Restaurant', 'Eddie\'s Napolis Frisco', 'Jonny\'s Pizza', 'Bagheri\'s Restaurant', 'Giuseppe\'s', 'Napolis Italian Restaurant', 'Mici Italian']
const fastFood = ['Chick-fil-A', ' Taco Bell', 'Golden Chick', 'Burger King', 'Sonic Drive-In', 'McDonald\'s', 'Whataburger', 'Wendy\'s', 'Panda Express', 'Canes']
const steak = ['Prairie House Restaurant', 'Texas Roadhouse', 'Outback Steakhouse', 'Queenie\'s Steakhouse', 'Randy\'s Steakhouse', 'Hannah\'s', 'Perry\'s Steakhouse & Grille', 'Cartwright\'s Ranch House', 'Saltgrass Steak House', 'Del Frisco\'s Double Eagle Steakhouse']
const indian = ['Curry District', 'Sawaii Indian Restaurant Little Elm', 'Curries N Cravings', 'Chowrastha - Indian Eatery', 'Mirchi Indian Cuisine', 'Sai Home Foods', 'Sangam Indian Restaurant', 'Desi District', 'Gully Point', 'Santhi\'s Kitchen']
const sushi = ['Sushi Bachi', 'Love Sushi', 'J Sushi', 'Kobe Teppan & Sushi', 'SushiBox', 'Sushi Motto', 'Hikari Sushi & Grill Japanese Restaurant', 'Blue Ginger', 'Buddha Belly Sushi', 'Shoji Sushi & Hibachi']
const choicesArray = ['American', 'Indian', 'Asian', 'Mexican', ' italian', 'Fast Food', 'Steak', 'Sushi']


// this is the randomizer selector function that picks an array between 0-9
function randomNumber() {
    return Math.floor(Math.random() * (10 - 1 + 1) + 0)
}

function choice(input) {
    // let choices = prompt(`Input a choice based on the options of ${choicesArray}`)
    if (input === steak) {
        console.log("Your randomized recommendation for steak is " + steak[randomNumber()])
    } else if (input === american) {
        console.log("Your randomized recommendation for american is " + american[randomNumber()])
    } else if (input === mexican) {
        console.log("Your randomized recommendation for mexican is " + mexican[randomNumber()])
    } else if (input === asian) {
        console.log("Your randomized recommendation for asian is " + asian[randomNumber()])
    } else if (input === sushi) {
        console.log("Your randomized recommendation for sushi is " + sushi[randomNumber()])
    } else if (input === indian) {
        console.log("Your randomized recommendation for indian is " + indian[randomNumber()])
    } else if (input === fastFood) {
        console.log("Your randomized recommendation for fast food is " + fastFood[randomNumber()])
    } else if (input === italian){
        console.log("Your randomized recommendation for italian is  " + italian[randomNumber()])
    }
    else{
        console.log("I'm sorry I did not understand your response please refresh the page and try again")
    }


}
function choiceTernary(input){
    let input = prompt('Input a choice based on the options of ${choicesArray}')
    return input === steak ? console.log("Your randomized recommendation for steak is " + steak[randomNumber()])
        : input === american ? console.log("Your randomized recommendation for american is " + american[randomNumber()])
            : input === mexican ? console.log("Your randomized recommendation for mexican is " + mexican[randomNumber()])
                : input === asian ?  console.log("Your randomized recommendation for asian is " + asian[randomNumber()])
                    : input === sushi ?  console.log("Your randomized recommendation for sushi is " + sushi[randomNumber()])
                        : input === indian ? console.log("Your randomized recommendation for indian is " + indian[randomNumber()])
                            : input === fastFood ? console.log("Your randomized recommendation for fast food is " + fastFood[randomNumber()])
                                : input === italian ? console.log("Your randomized recommendation for italian is  " + italian[randomNumber()])
                                    : console.log("I'm sorry I did not understand your response please refresh the page and try again")
}
choice(prompt(`Input a choice based on the options of ${choicesArray}`).toLowerCase())


console.log(choice(american))
console.log(choice(asian))
console.log(choice(mexican))
console.log(choice(italian))
console.log(choice(fastFood))
console.log(choice(steak))
console.log(choice(indian))
console.log(choice(sushi))
console.log(choice('soddcn'))


