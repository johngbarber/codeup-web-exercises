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

for (let i = 1; i <= 100; i++){
    if (i % 3 === 0 && i % 5 ===0){
        console.log("Fizz Buzz");
    }else if ( i % 3 === 0){
        console.log("Fizz")
    }else if (i % 5 === 0){
        console.log("Buzz")
    }else {
        console.log(i)
    }
}

function displayToDoList() {
    // Fetch the JSON file
    fetch('to-do.json')
        .then(response => response.json())
        .then(data => {
            // Get the container where we'll append the checkboxes
            const todoContainer = document.getElementById('todo-container');

            // Iterate through the to-do list items and create checkboxes
            data.forEach(item => {
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.id = item.id; // You can use a unique identifier for the ID
                const label = document.createElement('label');
                label.htmlFor = item.id;
                label.appendChild(document.createTextNode(item.task));

                // Append the checkbox and label to the container
                todoContainer.appendChild(checkbox);
                todoContainer.appendChild(label);
                todoContainer.appendChild(document.createElement('br'));
            });
        })
        .catch(error => console.error('Error fetching to-do list:', error));
}

// Call the function to display the to-do list
displayToDoList();