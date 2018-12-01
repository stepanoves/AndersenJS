var Project = (function () {
    function Project(title, cost, stringQuantity, developersQuantity) {
        this.title = title;
        this.cost = cost;
        this.stringQuantity = stringQuantity;
        this.developersQuantity = developersQuantity;
        this.manager = {};
        this.developers = [];
        this.status = false;
    }

    Project.prototype.constructor = Project;

    Project.prototype.getSalariesEmployees = function () {
        if (this.manager !== {} && this.developers.length > 0) {
            var commonSalary = 0;
            for (var i = 0; i < this.developers.length; i++) {
                commonSalary +=  this.developers[i].getSalary();
            }

            return commonSalary + this.manager.getSalary();
        }
        return 0;
    };

    Project.prototype.getDevelopersStringsQuantityInTime = function () {
        var commonQuantity = 0;
        for (var i = 0; i < this.developers.length; i++) {
            commonQuantity += this.developers[i].stringQuantity;
        }

        return this.manager.coefficient * commonQuantity;
    };
    return Project;
})();