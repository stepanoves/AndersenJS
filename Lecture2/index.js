function isNumber() {
    for (var i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] != "number")
            return false;
    }
    return true;
}
//task 1
function compareTwoNumbers(first, second) {
    if (!isNumber(first, second))
        return 'invalid arguments';
    return first > second;
}

//task 2
function printString(string) {
    return 'Вы ввели ' + string;
}

//task 3
function checkTypeOfArgument(argument) {
    return typeof argument == undefined || argument == null;
}

//task 4
function addCheckedProperty(object) {
    if (typeof object != "object")
        return 'this is not an object';
    object.checked = 'true';
    return object;
}

//task 5
function printNumbers(number) {
    if (!isNumber(number))
        return 'invalid arguments';
    //solution 1
    for (var i = 0; i <= number; i++) {
        console.log(i);
    }
    for (i--; i >= 0; i--) {
        console.log(i);
    }

    //solution 2
    for (var j = 0; j <= number; j++) {
        console.log(j + ' ' + (number - j));
    }
}