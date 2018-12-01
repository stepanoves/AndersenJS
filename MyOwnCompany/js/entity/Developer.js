var Developer = (function () {

    var DEVELOPERS_SALARY = {
        true: {
            'JUNIOR': 1000,
            'MIDDLE': 1500,
            'SENIOR': 2000
        },

        false: {
            'JUNIOR': 600,
            'MIDDLE': 1300,
            'SENIOR': 1700
        },
    };

    function Developer(name, surname, position, stringQuantity) {
        AbstractEmployee.apply(this, arguments);
        this.position = position;
        this.stringQuantity = stringQuantity;
    }

    Developer.prototype = Object.create(AbstractEmployee.prototype);
    Developer.prototype.constructor = Developer;

    Developer.prototype.getSalary = function () {
        return DEVELOPERS_SALARY[this.status][this.position];
    };

    return Developer;
})();