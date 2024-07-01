let displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('result').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('result').value = displayValue;
}

function calculate() {
    try {
        let result = eval(displayValue);
        document.getElementById('result').value = result;
        displayValue = ''; // Reset displayValue for next calculation
    } catch (error) {
        alert('Invalid calculation!');
        clearDisplay();
    }
}

