class Calculator {
    // constructor will take the input and the functions for our calculator
    constructor(previousText, currentText) {
        this.previousText = previousText;
        this.currentText = currentText;
        this.clear()
    }

    clear() { // will clear the whole input empty by default
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    delete() { // will delete a single element
        if(this.currentOperand === '') {
            return;
        }
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }

    appendNumber(digit) { // will append the numbers to display
        if(digit === '.' && this.currentOperand.includes('.')) {
            return;
        }
        this.currentOperand+= digit.toString();
    }

    chooseOperation(operation) { // will choose the operation based on what user clicks
        if(this.currentOperand === '') {
            return;
        }
        // if previous and current operand both are available
        if(this.previousOperand !== '') {
            this.compute();
        }
        // if previous is empty ;-
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    compute() { // will calculate the result
        let result;
        const prev = parseFloat(this.previousOperand)
        const curr = parseFloat(this.currentOperand)
        if(isNaN(prev) || isNaN(curr)) {
            return;
        }

        switch(this.operation) {
            case '+': result = prev + curr; break;
            case '-': result = prev - curr; break;
            case '×': result = prev * curr; break; //alt + 0215 for multiply
            case '÷': result = prev / curr; break; //alt + 0247 for divide
            default: return;
        }

        this.previousOperand='';
        this.operation = undefined;
        this.currentOperand = result.toString();
    }

    updateDisplay() { // will update the result on display
        this.currentText.innerText = this.currentOperand;
        if(this.operation != null) {
            this.previousText.innerText = `${this.previousOperand} ${this.operation}`
        }
        else {
            this.previousText.innerText = this.previousOperand;
        }
    }
}

const digits = document.querySelectorAll('[number]');
const operators = document.querySelectorAll('[operation]');
const clear = document.querySelector('[clear]');
const remove = document.querySelector('[delete]');
const equals = document.querySelector('[equals]');

const previousText = document.querySelector('[previousText]');
const currentText = document.querySelector('[currentText]');

const calculator = new Calculator(previousText, currentText);

clear.addEventListener('click', ()=> {
    calculator.clear();
    calculator.updateDisplay();
})

remove.addEventListener('click', ()=> {
    calculator.delete();
    calculator.updateDisplay();
})

digits.forEach(btn => {
    btn.addEventListener('click', ()=> {
        calculator.appendNumber(btn.innerText)
        calculator.updateDisplay();
    })
})

operators.forEach(btn => {
    btn.addEventListener('click', ()=> {
        calculator.chooseOperation(btn.innerText)
        calculator.updateDisplay();
    })
})

equals.addEventListener('click', ()=> {
    calculator.compute();
    calculator.updateDisplay();
})

