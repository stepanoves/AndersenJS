function Project(title, cost, stringsQuantity) {
    this.title = title;
    this.cost = cost;
    this.stringsQuantity = stringsQuantity;
}

Project.prototype.constructor = Project;

Project.prototype.getTitle = function () {
    return this.title;
}

Project.prototype.getCost = function () {
    return this.cost;
}

Project.prototype.getStringsQuantity = function () {
    return this.stringsQuantity;
}


