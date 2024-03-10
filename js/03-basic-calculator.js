// ADD A FUNCTION CALLED CALCULATE
function calculate (x, y, operation){
    let result
    switch (operation) {
        case 'add':
            result = x + y
            break;
    
        case 'subtract':
            result = x - y
            break;
        
        case 'multiply':
            result = x * y
            break;

        case 'divide':
            result = x / y
            break;
    }
    return result.toFixed(2)

}

// COLLECT FIRST NUMBER FROM USER
let firstNumber = Number(prompt('Enter first number'))

// COLLECT SECOND NUMBER FROM USER
let secondNumber = Number(prompt('Enter second number'))

// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
let operation
do {
    operation = prompt('Enter operation you want to perform: add, subtract, multiply or divide')
    if (operation != 'add' && operation != 'subtract' && 
    operation != 'multiply' && operation != 'divide'){
        alert('You didn\'t enter correct information. Do it again')
    }
} while (operation != 'add' && operation != 'subtract' && operation != 'multiply' && operation != 'divide');


// CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT
alert(`Result is: ${calculate(firstNumber, secondNumber, operation)}`)
