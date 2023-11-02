// Create a function that accepts three arguments (arrOfElements, bgColor, textColor), and returns the array of objects with their corresponding properties changed to the inputted values of bgColor and textColor.

    let elements = [
    {
        el: "button",
        style: {
            backgroundColor: "white",
            color: "black"
        },
        content: "Submit"
    },
    {
        el: "p",
        style: {
            backgroundColor: "white",
            color: "black"
        },
        content: "Our company is better at doing company things than your company."
    },
    {
        el: "h2",
        style: {
            backgroundColor: "white",
            color: "black"
        },
        content: "Welcome Back!"
    }
];

function changeElements(arrOfElements, bgColor, textColor) {
    for (let i = 0; i < arrOfElements.length; i++) {
        arrOfElements[i].style.backgroundColor = bgColor;
        arrOfElements[i].style.color = textColor;
    }
    return arrOfElements
}

changeElements(elements, "red", "white");
console.log(elements);

const changeAgain = (arrOfElementsAgain, bgColorAgain, textColorAgain) => {
    arrOfElementsAgain.forEach(function (element){
        element.style.backgroundColor = bgColorAgain;
        element.style.color = textColorAgain;
    })
    return arrOfElementsAgain
}
console.log(changeAgain(elements, "purple", "gold"))