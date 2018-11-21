var Company = (function () {
    function Company(title, budget) {
        this.title = title;
        this.budget = +budget;
        this.freeManagersList = [];
        this.freeDevelopersList = [];
        this.projectsList = [];
    }

    Company.prototype.constructor = Company;

    Company.prototype.addProject = function (project) {
        this.projectsList.push(project);
    };

    Company.prototype.addManager = function(manager) {
        this.freeManagersList.push(manager);
    };

    Company.prototype.addDeveloper = function (developer) {
        this.freeDevelopersList.push(developer);
    };

    Company.prototype.getProjetsByStatus = function (status) {
        var statusProjects = [];

        for (var i = 0; i < this.projectsList.length; i++) {
            if (this.projectsList[i].status === status) statusProjects.push(this.projectsList[i]);
        }

        return statusProjects;
    };

    Company.prototype.paySalaries = function () {
        var commonSalary = 0;

        for (var i = 0; i < this.freeManagersList.length; i++) {
            commonSalary += this.freeManagersList[i].getSalary();
        }

        for (var i = 0; i < this.freeDevelopersList.length; i++) {
            commonSalary += this.freeDevelopersList[i].getSalary();
        }

        for (var i = 0; i < this.projectsList.length; i++) {
            commonSalary += this.projectsList[i].getSalariesEmployees();
        }
        //console.log(commonSalary);
        this.budget -= +commonSalary;
    };
    //Метод который будет смотреть, если есть проект со статусом false, то он его берет назначет менеджера и девов
    Company.prototype.checkProjectsList = function () {

        for (var i = 0; i < this.projectsList.length; i++) {
            //если проект не в работе, есть свободный менеджер и девы то он запускается
            if (!this.projectsList[i].status
                && this.freeManagersList.length
                && this.freeDevelopersList.length >= this.projectsList[i].developersQuantity) {
                this.projectsList[i].manager = this.freeManagersList[0];
                this.projectsList[i].manager.status = true;
                this.projectsList[i].status = true;
                this.freeManagersList.splice(0, 1);

                for (var j = 0; j < this.projectsList[i].developersQuantity; j++) {
                    this.freeDevelopersList[0].status = true;
                    this.projectsList[i].developers.push(this.freeDevelopersList[0]);
                    this.freeDevelopersList.splice(0, 1);
                }
            }

            //если проект в работе и есть оставшиеся строки
            if (this.projectsList[i].status && this.projectsList[i].stringQuantity > 0) {
                this.projectsList[i].stringQuantity -= this.projectsList[i].getDevelopersStringsQuantityInTime();
            }

            //если строк больше нет, возвращаем менеджера и девов на базу и плюсуем бюджет конторы
            if (this.projectsList[i].stringQuantity <= 0) {
                this.budget += +this.projectsList[i].cost;
                this.projectsList[i].manager.status = false;
                this.freeManagersList.push(this.projectsList[i].manager);
                for (var j = 0; j < this.projectsList[i].developers.length; j++) {
                    this.projectsList[i].developers[j].status = false;
                    this.freeDevelopersList.push(this.projectsList[i].developers[j]);
                }
                this.projectsList.splice(i, 1);
                i--;
            }

        }
    };

    return Company;
})();