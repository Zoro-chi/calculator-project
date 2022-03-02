let pad = document.querySelectorAll(".nums")
let screen = document.querySelector("#screen")
const del = document.querySelector("#del")
const clear = document.querySelector("#clear")

const nums = Array.from(pad)
const screenDisp = Array.from(screen)


// ------------------------------------------------------------------------------------------------------------------
// OPERATORS
const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
// ------------------------------------------------------------------------------------------------------------------

nums.forEach(num => {
    num.addEventListener("click", display);
}) 
function display(num) {
    screenDisp.push(this.value)
    screen.innerText += this.value;
}

del.addEventListener("click", backspace);
function backspace() {
    screenDisp.pop()
    screen.innerText = screenDisp
}


// clear.addEventListener("click", clearAll)
// function clearAll() {
//     ''
// }