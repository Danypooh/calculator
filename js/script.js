let num1 = Number(document.getElementById("num1").value);
let num2 = Number(document.getElementById("num2").value);

let resultElement = document.getElementById('result');

document.querySelectorAll('input').forEach(input => {  //to update the input values
    input.addEventListener('change', updateValue);
});

function updateValue(e) {
  num1 = Number(document.getElementById("num1").value);
  num2 = Number(document.getElementById("num2").value);
}

const sum = function() {
	resultElement.textContent = 'The Sum is = ' + (num1 + num2);
};

const subtract = function() {
	result.textContent = 'The Subtraction is = ' + (num1 - num2);
};

const multiply = function() {
    result.textContent = 'The Multiplication is = ' + (num1 * num2);
};

const divide = function() {
	result.textContent = 'The Division is = ' + (num1 / num2);
};

const power = function() {
    result.textContent = 'The Power is = ' + (Math.pow(num1,num2));
};

const sqrt = function() {
	result.textContent = 'The Square root of Number 1 is = ' + (Math.sqrt(num1));
};