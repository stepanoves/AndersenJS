function Programmer(name, surname, level, stringsQuantity) {
    AbstractEmployee.apply(this, arguments);
    this.level = level;
    this.stringsQuantity = stringsQuantity;
    this.status = true;
}

Programmer.prototype = Object.create(AbstractEmployee.prototype);
Programmer.prototype.constructor = Programmer;

Programmer.prototype.getLevel = function () {
    return this.level;
}

Programmer.prototype.setLevel = function (level) {
    this.level = level;
}

Programmer.prototype.getStringsQuantity = function () {
    return this.stringsQuantity;
}

Programmer.prototype.getStatus = function () {
    return this.status;
}

Programmer.prototype.changeStatus = function () {
    this.status = !this.status;
}

// var p = new Programmer('egor', 'stepanov', 'junior', 0);
// p.addProject(new Project('asd', 55, 100));