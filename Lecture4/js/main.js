var calcField = document.querySelector(".calc_field");
var calcButtons = document.querySelectorAll(".calc_button");
var equallyButton = document.querySelector(".equally_button");
var tempField = document.querySelector(".temp");
var clearButton = document.querySelector(".clear");
var historyResult = document.querySelector(".history_result");
var hideHistoryButton = document.querySelector(".hide_button");

function isOperation(symbol) {
    var operations = '/*-+^';
    return operations.indexOf(symbol) !== -1;
}

function parseExpression(expression) {
    var expressionArr = expression.split(' ');
    var newExpression = '';
    for (var i = 0; i < expressionArr.length; i++) {
        if (expressionArr[i+1] === '^') {
            newExpression += 'Math.pow(' + expressionArr[i] + ',' + expressionArr[i+2]+ ')'
            i += 2;
        } else {
            newExpression += expressionArr[i];
        }
    }
    return newExpression;
}

function clickHideButton() {
    if (hideHistoryButton.innerText === 'Скрыть') {
        historyResult.setAttribute('hidden', '');
        hideHistoryButton.innerText = 'Показать';
    } else {
        historyResult.removeAttribute('hidden');
        hideHistoryButton.textContent = 'Скрыть';
    }
}

function clickCalcButton(button) {
    if (isOperation(button.innerText)) {
        calcField.value += ' ' + button.innerText + ' ';
    } else {
        calcField.value += button.innerText;
    }
}

function clickEquallyButton() {
    tempField.innerText = calcField.value;
    console.log(parseExpression(calcField.value));
    calcField.value = eval(parseExpression(calcField.value));

    var historyElement = document.createElement('div');
    historyElement.setAttribute('class', 'row history_element');

    var equation = document.createElement('div');
    equation.setAttribute('class', 'col-8');
    equation.innerText = tempField.innerText;

    var result = document.createElement('div');
    result.setAttribute('class', 'col-4');
    result.innerText = calcField.value;

    historyElement.appendChild(equation);
    historyElement.appendChild(result);

    historyElement.addEventListener('click', clickHistoryElement.bind(null, historyElement));

    historyResult.appendChild(historyElement);

}

function clickHistoryElement(historyElement) {
    var equation = historyElement.querySelector('.col-8');
    var result = historyElement.querySelector('.col-4');

    tempField.innerText = equation.innerText;
    calcField.value = result.innerText;
}

function clickClearButton() {
    tempField.innerText = '';
    calcField.value = '';
}

function fillCalcFieldByKeyboard(event) {
    var allowedCharacters = '()1234567890^./*-+';
    var code = event.key;
    if (code === '=' || code === 'Enter') {
        clickEquallyButton();
    }
    if (allowedCharacters.indexOf(code)  !== -1) {
        if (isOperation(code)) {
            calcField.value += ' ' + code + ' ';
        } else {
            calcField.value += code;
        }
    } else {
        return false;
    }
}

equallyButton.addEventListener('click', clickEquallyButton);
clearButton.addEventListener('click', clickClearButton);
hideHistoryButton.addEventListener('click', clickHideButton);
document.addEventListener('keydown', fillCalcFieldByKeyboard);

for( var i = 0; i < calcButtons.length; i++ ) {
    calcButtons[i].addEventListener('click', clickCalcButton.bind( null, calcButtons[i]) );
}
