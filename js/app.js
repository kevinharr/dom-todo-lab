// REFERENCES

const inputElement = document.getElementById("choice")
const buttonElement = document.getElementById("submit-button")
const unorderedListElement = document.getElementById("todo-list")

buttonElement.addEventListener("click", function(evt) {
    const li = document.createElement('li')
    li.textContent = inputElement.value
    unorderedListElement.appendChild(li)
    inputElement.value=""

})




console.log();