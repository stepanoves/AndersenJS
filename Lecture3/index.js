var utilityModule = (function () {
    return {
        isUndefined: function (argument) {
            return typeof argument === 'undefined';
        },

        isNull: function (argument) {
            return argument === null;  
        },

        isNotANumber: function (argument) {
            return Number.isNaN(argument);
        },

        isEmptyObject: function (object) {
            for(key in object) {
                return false;
            }
            return true;
        },

        propertiesTransformation: function (obj, func) {
            var newObj = {};
            for(key in obj) {
                newObj[key] = func(obj[key]);
            }
            return newObj;
        },

        getRandomNumber: function (leftBoundary, rightBoundary) {
            var number = leftBoundary + Math.random() * (rightBoundary - leftBoundary + 1);
            return Math.floor(number);
        },

        deepCompare: function (firstObject, secondObject) {

            if (Object.keys(firstObject).length !== Object.keys(secondObject).length) return false;

            for (key in firstObject) {
                if (typeof firstObject[key] === 'object' && typeof secondObject[key] === 'object') {
                    if( !this.deepCompare(firstObject[key], secondObject[key]) ) return false;
                } else {
                    if (firstObject[key] !== secondObject[key]) return false;
                }
            }

            return true;
        },

        removeProperties: function (obj, func) {
            var newObj = {};
            for (key in obj) {
                if (func(obj[key])) {
                    newObj[key] = obj[key];
                }
            }
            return newObj;
        }
    }
})();


console.log(utilityModule.isUndefined(undefined));
console.log(utilityModule.isUndefined('test'));

console.log(utilityModule.isNull(null));
console.log(utilityModule.isNull('test'));

console.log(utilityModule.isNotANumber(0/0));
console.log(utilityModule.isNotANumber("test"));

console.log(utilityModule.isEmptyObject({}));
console.log(utilityModule.isEmptyObject({name: "Egor"}));


console.log(utilityModule.propertiesTransformation({'name': 'Egor', 'year': '1993'}, function (property) {
    return property + 2;
}));

console.log(utilityModule.propertiesTransformation({'name': 'Egor', 'year': '1993'}, function (property) {
    return utilityModule.isNull(property);
}));

console.log(utilityModule.getRandomNumber(1, 7));

console.log(utilityModule.removeProperties({'name': 'Egor', 'year': '1993', 'elem': null}, function (property) {
    return !utilityModule.isNull(property);
}));


var testObj1 = {'1': 1, '2': 2, '3': 3};
var testObj2 = {'1': 1, '2': 2, '3': 3};

var testObj3 = {'1': 1, '2': 2, '3': 3};
var testObj4 = {'1': 1, '2': 3, '3': 3};

var testObj5 = {'1': {'a': 'a'}, '2': 2, '3': 3};
var testObj6 = {'1': {'a': 'a'}, '2': 2, '3': 3};

var testObj7 = {'1': {'a': 'a'}, '2': 2, '3': 3};
var testObj8 = {'1': {'a': 'b'}, '2': 2, '3': 3};

var testObj9 = {'1': {'a': 'a'}, '2': 2, '3': 3};
var testObj10 = {'1': {'a': 'a'}, '2': 2, '3': 4};

var testObj11 = {'1': {'a': 'a'}, '2': 2, '3': {'b': 'b'}};
var testObj12 = {'1': {'a': 'a'}, '2': 2, '3': {'b': 'b'}};

var testObj13 = {'1': {'a': 'a'}, '2': 2, '3': {'b': {'1': 1}}};
var testObj14 = {'1': {'a': 'a'}, '2': 2, '3': {'b': {'1': 1}}};

var testObj15 = {'1': {'a': 'a'}, '2': 2, '3': {'b': {'1': 1}}};
var testObj16 = {'1': {'a': 'a'}, '2': 2, '3': {'b': {'1': 2}}};

var testObj17 = {'1': 1, '2': [1, 2, 3], '3': 3};
var testObj18 = {'1': 1, '2': [1, 2, 3], '3': 3};

var testObj19 = {'1': 1, '2': [1, 2, 3], '3': 3};
var testObj20 = {'1': 1, '2': [1, 3, 3], '3': 3};

console.log(utilityModule.deepCompare(testObj1, testObj2)); //expected result: true
console.log(utilityModule.deepCompare(testObj3, testObj4)); //expected result: false
console.log(utilityModule.deepCompare(testObj5, testObj6)); //expected result: true
console.log(utilityModule.deepCompare(testObj7, testObj8)); //expected result: false
console.log(utilityModule.deepCompare(testObj9, testObj10)); //expected result: false
console.log(utilityModule.deepCompare(testObj11, testObj12)); //expected result: true
console.log(utilityModule.deepCompare(testObj13, testObj14)); //expected result: true
console.log(utilityModule.deepCompare(testObj15, testObj16)); //expected result: false
console.log(utilityModule.deepCompare(testObj17, testObj18)); //expected result: true
console.log(utilityModule.deepCompare(testObj19, testObj20)); //expected result: false
