var Manager = (function () {

    var MANAGER_SALARY = {
        true: 2500,
        false: 2000
    };

    function Manager(name, surname, coefficient) {
        AbstractEmployee.apply(this, arguments);
        this.coefficient = coefficient;
    }

    Manager.prototype = Object.create(AbstractEmployee.prototype);
    Manager.prototype.constructor = Manager;

    Manager.prototype.getSalary = function () {
        //console.log(MANAGER_SALARY[this.status]);
        return MANAGER_SALARY[this.status];
    };

    return Manager;
})();