class Company {
    constructor(title, budget) {
        this.__title = title;
        this.__budget = budget;
        this.__freeDevelopers = [];
        this.__freeManagers = [];
        this.__projects = [];
    }

    paySalary(allEmployees) {
        for(let developer of allEmployees['DEVELOPERS']) {
            this.__budget -= Company.SALARIES['DEVELOPER'][developer.status][developer.position];
        }

        for(let manager of allEmployees['MANAGERS']) {
            this.__budget -= Company.SALARIES['MANAGER'][manager.status];
        }
    }

    checkProjects() {
        for(let i = 0; i < this.__projects.length; i++) {

            if (!this.__projects[i].status
                && this.__freeManagers.length
                && this.__projects[i].developersQuantity <= this.__freeDevelopers.length ) {

                    this.__projects[i].manager = this.__freeManagers[0];
                    this.__projects[i].manager.status = true;
                    this.__projects[i].status = true;
                    this.__freeManagers.splice(0, 1);

                    for (let j = 0; j < this.__projects[i].developersQuantity; j++) {
                        this.__freeDevelopers[0].status = true;
                        this.__projects[i].developer = this.__freeDevelopers[0];
                        this.__freeDevelopers.splice(0, 1);
                    }
                }

            if (this.__projects[i].status && this.__projects[i].stringQuantity > 0) {
                this.__projects[i].subStrings();
            }

            if (this.__projects[i].stringQuantity <= 0) {
                this.__budget += this.__projects[i].cost;
                this.__projects[i].manager.status = false;
                this.__freeManagers.push(this.__projects[i].manager);
                for (var j = 0; j < this.__projects[i].developersQuantity; j++) {
                    this.__projects[i].developers[j].status = false;
                    this.__freeDevelopers.push(this.__projects[i].developers[j]);
                }
                this.__projects.splice(i, 1);
                i--;
            }
        }

    }


    get title() {
        return this.__title;
    }

    get budget() {
        return this.__budget;
    }

    get managers() {
        return this.__freeManagers;
    }

    get developers() {
        return this.__freeDevelopers;
    }

    projectsByStatus(status) {
        let statusProjects = [];
        for (let project of this.__projects) {
            if (project.status === status) statusProjects.push(project);
        }

        return statusProjects;
    }

    get allEmployees() {
        let busyDevelopers = [];
        let busyManagers = [];

        for (let project of this.__projects) {
            if (project.status) {
                busyDevelopers = [...busyDevelopers, ...project.developers];
                busyManagers = [...busyManagers, project.manager];
            }
        }

        return {
            'DEVELOPERS': [...this.__freeDevelopers, ...busyDevelopers],
            'MANAGERS': [...this.__freeManagers, ...busyManagers]
        };
    }

    freeDeveloper(developer) {
        this.__freeDevelopers.push(developer);
    }

    freeManager(manager) {
        this.__freeManagers.push(manager);
    }

    project(project) {
        this.__projects.push(project);
    }

}

Company.SALARIES = {
    'DEVELOPER' : {
        false : {
            0 : 1000,
            1 : 1500,
            2 : 2000
        },
        true : {
            0 : 1500,
            1 : 2000,
            2 : 2500
        }
    },
    'MANAGER' : {
        false : 2000,
        true : 2500
    }
};