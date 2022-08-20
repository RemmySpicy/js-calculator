const output = document.querySelector('.output');
const result = document.querySelector('.result');
const buttons = document.querySelectorAll('button');

// let buttons = Array.from(document.getElementsByClassName('button'));

// let buttons = Array.from(document.getElementsByClassName('button'));


buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        switch(e.target.innerText) {
            case 'C':
                output.innerText = '';
                result.innerText = '0'
                // result.style.animation = " "
                // output.style.animation = " "
                break;
            case '←':
                if (output.innerText === '') {
                    result.innerText = '0';
                } else {
                    output.innerText = output.innerText.slice(0, -1);
                }
                break;
            case '=':
                if (output.innerText !== '') {
                    try {
                        result.innerText = eval(output.innerText);
                    } catch {
                        result.innerText = "Syntax Error";
                    }
                }
                
                result.style.animation = "big 100ms ease-in-out";
                output.style.animation = "small 100ms ease-in-out";
                result.style.animationFillMode = "forwards";
                output.style.animationFillMode = "forwards";
                break;
            
            default:
                if (output.innerText === '0') {
                    output.innerText = ''
                } output.innerText += e.target.innerText;
            }
    });
});



// Odin project systems

// create functions that add, subtract, multiply and divide

// add function
function add() {
    let result = 0;
    for (let item of arguments) {
        result += item;
    }
    return result;
}

function subtract() {
    let result = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        result -= arguments[i];
    }
    return result;
}

function multiply() {
    let result = arguments[0]
    for (let i = 1; i < arguments.length; i++) {
        result *= arguments[i];
    }
    return result;
}


function divide() {
    let result = arguments[0]
    for (let i = 1; i < arguments.length; i++) {
        result /= arguments[i];
    }
    return result;
}



console.log(divide(5, 2 ))

function operate(...args) {

    // args.split(', ')
}

// console.log(operate('23', '+', '1', '+', '13', '+', '7'))











// const output = document.querySelector(".output");
// const result = document.querySelector(".result");
// const keys = document.querySelectorAll("button");

// //eventlistener
// keys.forEach(key=>{
//     key.addEventListener("click",calculate);
// });

// function calculate(){
//     let buttonText = this.innerText;
//     if(buttonText==="AC"){
//         output.innerText = "";
//         result.innerText = "0";
//         result.style.animation = "";
//         output.style.animation = "";
//         return;
//     }

//     if(buttonText === "DEL"){
//         output.textContent = output.textContent.substr(0,output.textContent.length-1);
//         return;
//     }

//     if(buttonText === "="){
//         result.innerText = eval(output.innerText);
//         result.style.animation = "big 0.5s ease-in-out";
//         output.style.animation = "small 0.5s ease-in-out";
//         result.style.animationFillMode = "forwards";
//         output.style.animationFillMode = "forwards";
//     }

//     else{
//         output.textContent += buttonText;
//         return;
//     }

  
// }











// let display = document.getElementById('display');

// let buttons = Array.from(document.getElementsByClassName('button'));

// buttons.map( button => {
//     button.addEventListener('click', (e) => {
//         switch(e.target.innerText){
//             case 'C':
//                 display.innerText = '';
//                 break;
//             case '=':
//                 try{
//                     display.innerText = eval(display.innerText);
//                 } catch {
//                     display.innerText = "Error"
//                 }
//                 break;
//             case '←':
//                 if (display.innerText){
//                    display.innerText = display.innerText.slice(0, -1);
//                 }
//                 break;
//             default:
//                 display.innerText += e.target.innerText;
//         }
//     });
// });