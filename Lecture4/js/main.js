var Calculate = (function () {
    var result = 0;
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
       getResult: function (str) {
           var splitStr = str.split(" ");
           for(var i = 0; i < splitStr.length; i++) {
               if (operations[splitStr[i]]) {
                   result = operations[splitStr[i]](result, +splitStr[i + 1]);
               }
           }

           return result;
       }
    }
})();

console.log(Calculate.getResult("- 2 + 3 + 1 * 2"));