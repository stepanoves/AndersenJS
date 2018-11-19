function Manager(name, surname, expierence) {
    AbstractEmployee.apply(this, arguments);
    this.expierence = expierence;
    this.programmersList = [];

}

Manager.prototype = Object.create(AbstractEmployee.prototype);
Manager.prototype.constructor = Manager;

Manager.prototype.getExpierence = function () {
    return this.expierence;
}

Manager.prototype.addProgrammer = function (programmer) {
    this.programmersList.push(programmer);
}

