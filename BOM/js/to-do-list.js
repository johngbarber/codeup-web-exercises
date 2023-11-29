
addButton = document.querySelector("button.add");
addButton.addEventListener("click", addToDo);

let list = document.querySelector("#to-do-list");

let itemCount = 0;

function addToDo(event) {
    // prevent reload
    event.preventDefault();
    // Check for valid input or more than allowed tasks
    let newItemField = document.querySelector("#to-do");
    if (newItemField.value === "") {
        alert("What, exactly, are you trying to do here buckaroo?");
    } else if (itemCount >= 10) {
        alert("Whoa there partner! Don't bite off more than you can chew.");
        newItemField.value = "";
    } else {
        // Create new list item
        let newItem = document.createElement("li");
        newItem.classList.add("to-do-item", "list-group-item", "d-flex", "justify-content-between", "align-items-center");
        // Fill new item's description and add to item
        let itemDesc = document.createElement("p");
        itemDesc.innerText = newItemField.value;
        itemDesc.classList.add("m-0");
        newItem.appendChild(itemDesc);
        // Create new button and add to list item
        let doneButton = document.createElement("button");
        doneButton.classList.add("btn", "btn-danger");
        doneButton.innerText = "Done";
        newItem.appendChild(doneButton);
        // Add event listener to Done button
        doneButton.addEventListener("click", function () {
            this.parentElement.remove();
            itemCount--;
        });
        // Add new list item to list
        list.appendChild(newItem);
        itemCount++;
        // Clear the new to-do field
        newItemField.value = "";
    }
}