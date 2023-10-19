const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
    return strokes === 1 ? names[0]
        : strokes <= par - 2
            ? names[1]
            : strokes === par - 1
                ? names[2]
                : strokes === par
                    ? names[3]
                    : strokes === par + 1
                        ? names[4]
                        : strokes === par + 2
                            ? names[5]
                                : names[6];
}

console.log(golfScore(5, 3));

function calculateTotal(luckyNumber, subTotal){
    let discount = [0, .1, .25, .35, .5, 1];
    return luckyNumber ===  1 ? subTotal- (subTotal * discount[0])
            :  luckyNumber === 2 ? subTotal- (subTotal * discount[1])
                : luckyNumber === 3
    // ? (luckyNumber === 1) {
    //     discount = .1
    // } else if (luckyNumber === 2) {
    //     discount =.25
    // } else if (luckyNumber === 3) {
    //     discount = .35
    // } else if (luckyNumber === 4) {
    //     discount = .5
    // } else if (luckyNumber === 5) {
    //     discount = 1
    // }
    // return subTotal - (subTotal * discount)
}

console.log(calculateTotal(2, 100));