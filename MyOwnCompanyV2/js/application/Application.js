class Application {

    constructor() {
        this.__view = new View();
    }

    start(title, budget, managersDiv, developersDiv, projectsDiv, startedProjectsDiv, budgetField) {
        this.company = new Company(title, budget);

        this.everyTurn(managersDiv, developersDiv, projectsDiv, startedProjectsDiv, budgetField);

        Application.timerID = setInterval(() => {
            this.everyTurn(managersDiv, developersDiv, projectsDiv, startedProjectsDiv, budgetField);
        }, Application.TIMEOUT);
    }

    everyTurn(managersDiv, developersDiv, projectsDiv, startedProjectsDiv, budgetField) {
        this.company.paySalary(this.company.allEmployees);
        this.company.checkProjects();
        this.__view.updateBudget(this.company.budget, budgetField);
        this.__view.updateItems(this.company.managers, managersDiv);
        this.__view.updateItems(this.company.developers, developersDiv)
        this.__view.updateItems(this.company.projectsByStatus(false), projectsDiv);
        this.__view.updateItems(this.company.projectsByStatus(true), startedProjectsDiv);

        if (this.company.budget < 0) {
            clearInterval(Application.timerID);
            alert('Вы проиграли')
        }
    }
}

Application.timerID = undefined;
Application.TIMEOUT = 3000;