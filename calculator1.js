const buttons = document.querySelectorAll(".buttons")
const nums = document.querySelectorAll(".nums")
const screen = document.querySelector("#screen")
const del = document.querySelector("#del")
const clear = document.querySelector("#clear")
const op = document.querySelector("#OP")
const fun = document.querySelectorAll(".fun")
let inner = document.querySelector("#innerScreen")

// ------------------------------------------------------------------------------------------------------------------
// OPERATORS
const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
// ------------------------------------------------------------------------------------------------------------------

// screen.innerText = 0

nums.forEach(num =>{
    num.addEventListener("click", show)
    function show(num){
        screen.textContent += event.target.value
    }
})

let firstNum = ""
let ope = ""
let secondNum = ""
let res = ""

fun.forEach(func =>{
    func.addEventListener("click", operator)
    function operator(func){
        firstNum = parseFloat(screen.innerText)
        ope = event.target.value
        inner.textContent = `${firstNum} ${ope}`
        screen.textContent = ""
        console.log(firstNum)
        console.log(ope)
    }
})

op.addEventListener("click", equal)
function equal(){
    secondNum = parseFloat(screen.innerText)
    inner.textContent = ""
    console.log(secondNum)
    if (ope == "+"){
        res = add(firstNum, secondNum)
        screen.textContent = res
    } else if (ope == "-"){
        res = sub(firstNum, secondNum)
        screen.textContent = res
    }else if (ope == "x"){
        res = multiply(firstNum, secondNum)
        screen.textContent = res
    }else if (ope == "÷"){
        res = divide(firstNum, secondNum)
        screen.textContent = res
    }
}

clear.addEventListener("click", clearAll)
function clearAll(){
    screen.textContent = ""
}

del.addEventListener("click", dlt)
function dlt(){
    let screenValue = screen.innerText
    screenValue = screenValue.slice(0, -1);
    console.log(screenValue)
    return screen.textContent = screenValue
}