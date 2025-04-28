const history = [];
let memory = null;

function checkInputs() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const operationButtons = ['+', '-', '*', '/'];

    const enable = num1 !== '' && num2 !== '';
    operationButtons.forEach(op => {
        const button = document.querySelector(`button[onclick="calculate('${op}')"]`);
        if (button) {
            button.disabled = !enable;
        }
    });

    document.getElementById('clear-history').disabled = history.length === 0;
}

function calculate(operator) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultText = document.querySelector('#result');
    let result = 0;

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers.");
        return;
    }
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                result = 'Error: Divide by zero.';
                break;
            } else {
                result = num1 / num2;
                break;
            }
    }
    resultText.innerHTML = `${result}`;
    const historyEntry = `${num1} ${operator} ${num2} = ${result}`;
    history.push(historyEntry);
    displayHistory();
}

function displayHistory() {
    const historyList = document.querySelector('#history');
    historyList.innerHTML = '';
    history.forEach(entry => {
        const li = document.createElement('li');
        li.textContent = entry;
        historyList.appendChild(li);
    });

    
    checkInputs();
}

function clearHistory() {
   history.length = 0; 
   displayHistory(); 
}

function addToMemory() {
    const resultText = document.querySelector('#result').innerHTML;
    const resultVal = parseFloat(resultText);
    if(!isNaN(resultVal)){
        memory = resultVal;
        alert(`Stored in memory: ${memory}`);
    }
}
function recallMemory() {
    if (memory !== null) {
        document.getElementById('num1').value = memory;
    } else {
        alert("Memory is empty.");
    }
}
function clearMemory() {
    memory = null;
    alert("Memory Cleared.");
}  

document.addEventListener("keydown", function (e) {
    const key = e.key;
    if (['+', '-', '*', '/'].includes(key)) {
        calculate(key);
    } else if (key === 'Enter') {
        calculate('+'); 
    }
});

document.getElementById('num1').addEventListener('input', checkInputs);
document.getElementById('num2').addEventListener('input', checkInputs);

checkInputs();