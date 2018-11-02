//task 1
function compareTwoNumbers(first, second) {
    if (!isFinite(+first) || !isFinite(+second)) {
        console.log('invalid arguments');
        return null;
    }
    return first > second;
}