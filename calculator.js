// let pad = document.querySelectorAll(".nums")
// let screen = document.querySelector("#screen")
// const del = document.querySelector("#del")
// const clear = document.querySelector("#clear")
// const op = document.querySelector("#OP")
// const fun = document.querySelectorAll(".fun")

// const func = Array.from(fun)
// const nums = Array.from(pad)
// const screenDisp = Array.from(screen)
// let screenValues = []

// // ------------------------------------------------------------------------------------------------------------------
// // OPERATORS
// const add = (a, b) => a + b;
// const sub = (a, b) => a - b;
// const multiply = (a, b) => a * b;
// const divide = (a, b) => a / b;
// // ------------------------------------------------------------------------------------------------------------------

// nums.forEach(num => {
//     num.addEventListener("click", display);
// }) 
// function display(num) {
//     screenDisp.push(this.value)
//     screen.innerText += this.value;
// }

// del.addEventListener("click", backspace);
// function backspace() {
//     screenDisp.pop()
//     screen.innerText = screenDisp
// }
// // ----------------------------------------------------------------------------
// func.forEach(fun => {
//     fun.addEventListener("click", move)
// })
// function move(){
//     let split = screen.innerText.split(/[^0-9 | .]/)
//     console.log(split)
//     let int1 = parseFloat(split[0])
//     console.log(int1)
//     if (screen.innerText.includes("+")){
//         let ope = "+"
//     }
//     return ope && int1
// }


// ---------------------------------------------------------------------------


// _____________________________________________________________________________________________________________________
// op.addEventListener("click", operate);
// function operate(operator = screenDisp[1], num1 = parseInt(screenDisp[0]), num2 = parseInt(screenDisp[2])){
//     screen.innerText = "";
//     let res;
//     if (screenDisp[1] == "+"){
//         res = add(num1, num2)
//     } else if (screenDisp[1] == "-"){
//         res = sub(num1, num2)
//     }else if (screenDisp[1] == "*"){
//         res = multiply(num1, num2)
//     }else if (screenDisp[1] == "/"){
//         res = divide(num1, num2)
//     } else {
//         alert("Please select an operator!")
//     }console.log(res)
//     console.log(screenDisp)
//     screenDisp[0] = res;
//     screenDisp.splice(1, 2)
//     // console.log(screenDisp)
//     return screen.innerText = res;
// }
// _____________________________________________________________________________________________________________________
// clear.addEventListener("click", clearAll)
// function clearAll() {
//     ''
// }
