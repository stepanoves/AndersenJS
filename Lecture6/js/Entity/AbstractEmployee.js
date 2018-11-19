function AbstractEmployee(name, surname) {
    this.name = name;
    this.surname = surname;
    this.projectsList = [];
}

AbstractEmployee.prototype.getName = function () {
    return this.name;
}

AbstractEmployee.prototype.getSurname = function () {
    return this.surname;
}

AbstractEmployee.prototype.addProject = function (project) {
    this.projectsList.push(project);
}