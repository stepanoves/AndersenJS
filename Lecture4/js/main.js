var calcField = document.querySelector(".calc_field");
var calcButtons = document.querySelectorAll(".calc_button");
var equallyButton = document.querySelector(".equally_button");
var tempField = document.querySelector(".temp");
var clearButton = document.querySelector(".clear");
var historyResult = document.querySelector(".history_result");

function clickCalcButton(button) {
    if (Calculate.isOperation(button.innerText)) {
        calcField.value += ' ' + button.innerText + ' ';
    } else {
        calcField.value += button.innerText;
    }
}

function clickEquallyButton() {
    tempField.innerText = calcField.value;
    calcField.value = Calculate.getResult(calcField.value);

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
    //var historyElement = document.querySelector('.history_element');
    var equation = historyElement.querySelector('.col-8');
    var result = historyElement.querySelector('.col-4');

    tempField.innerText = equation.innerText;
    calcField.value = result.innerText;
}

function clickClearButton() {
    tempField.innerText = '';
    calcField.value = '';
}

equallyButton.addEventListener('click', clickEquallyButton);
clearButton.addEventListener('click', clickClearButton);

for( var i = 0; i < calcButtons.length; i++ ) {
    calcButtons[i].addEventListener('click', clickCalcButton.bind( null, calcButtons[i]) );
}


var Calculate = (function () {

    var operations = {
       "+": function (a, b) {
           return a + b;
       },
       "-": function (a, b) {
           return a - b;
       },
       "*": function (a, b) {
           return a * b;
       },
       "/": function (a, b) {
           return a / b;
       }
    };

    return {
        isOperation: function (opr) {
            return operations[opr];
        },
       getResult: function (str) {
           var result = 0;
           var splitStr = str.split(" ");
           var i = 1;
           if(operations[splitStr[0]]) {
               result += operations[splitStr[0]](result, +splitStr[1]);
               i = 2;
           } else {
               result += +splitStr[0];
           }
           for(i; i < splitStr.length; i++) {
               //console.log(i);
               if (operations[splitStr[i]]) {
                   result = operations[splitStr[i]](result, +splitStr[i + 1]);
               }
           }

           return result;
       }
    }
})();
