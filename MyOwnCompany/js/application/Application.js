var Application = (function () {
    var TIMEOUT = 3000;
    var timerId;

    var freeDevDiv = document.querySelector('.developers-free');
    var freeManDiv = document.querySelector('.managers-free');
    var freeProjDiv = document.querySelector('.projects-free');

    var currentBudget = document.querySelector('.current-budget');
    var processProjDiv = document.querySelector('.projects-process');

    var updateView = new UpdateView();

    function Application() {}


    Application.prototype.start = function (title, budget) {
        var that = this;

        this.company = new Company(title, +budget);

        that.everyTurn();

        timerId = setInterval(function () {
            that.everyTurn();
        }, TIMEOUT);
    };

    Application.prototype.everyTurn = function () {
        this.company.checkProjectsList();
        this.company.paySalaries();
        updateView.updateBudget(currentBudget, this.company.budget);
        updateView.updateProjects(freeProjDiv, this.company.getProjetsByStatus(false));
        updateView.updateProjects(processProjDiv, this.company.getProjetsByStatus(true));
        updateView.updateManagers(freeManDiv, this.company.freeManagersList);
        updateView.updateDevelopers(freeDevDiv, this.company.freeDevelopersList);

        if (this.company.budget < 0) {
            clearInterval(timerId);
            alert('Вы проиграли')
        }
    };

    return Application;
})();