var UpdateView = (function () {

    function UpdateView() {}

    UpdateView.prototype.constructor = UpdateView;

    UpdateView.prototype.updateBudget = function (budgetField, currentBudget) {
        budgetField.innerText = currentBudget;
    };

    UpdateView.prototype.updateDevelopers = function (freeDevelopersDiv, freeDevelopers) {
        freeDevelopersDiv.innerHTML = null;

        for (var i = 0; i < freeDevelopers.length; i++) {
            var freeDeveloperDiv = document.createElement('div');
            freeDeveloperDiv.setAttribute('class', 'row');
            var developerNameDiv = document.createElement('div');
            developerNameDiv.setAttribute('class', 'col-3');
            developerNameDiv.innerText = freeDevelopers[i].surname + ' ' + freeDevelopers[i].name;
            var developerPositionDiv = document.createElement('div');
            developerPositionDiv.setAttribute('class', 'col-3');
            developerPositionDiv.innerText = freeDevelopers[i].position;
            var developerUpdateDiv = document.createElement('a');
            developerUpdateDiv.setAttribute('href', '#');
            developerUpdateDiv.setAttribute('class', 'update');
            developerUpdateDiv.setAttribute('id', ''+i);
            developerUpdateDiv.innerText = 'Повысить';

            freeDeveloperDiv.appendChild(developerNameDiv);
            freeDeveloperDiv.appendChild(developerPositionDiv);
            freeDeveloperDiv.appendChild(developerUpdateDiv);
            freeDevelopersDiv.appendChild(freeDeveloperDiv);
        }
    };

    UpdateView.prototype.updateManagers = function (freeManagersDiv, freeManagers) {
        freeManagersDiv.innerHTML = null;

        for (var i = 0; i < freeManagers.length; i++) {
            var freeManagerDiv = document.createElement('div');
            freeManagerDiv.setAttribute('class', 'row');
            var managerNameDiv = document.createElement('div');
            managerNameDiv.setAttribute('class', 'col-8');
            managerNameDiv.innerText = freeManagers[i].surname + ' ' + freeManagers[i].name;
            freeManagerDiv.appendChild(managerNameDiv);
            freeManagersDiv.appendChild(freeManagerDiv);
        }
    };

    UpdateView.prototype.updateProjects = function (projectsDiv, projects) {
        projectsDiv.innerHTML = null;

        for (var i = 0; i < projects.length; i++) {
            var projectDiv = document.createElement('div');
            projectDiv.setAttribute('class', 'row');
            var projectTitleDiv = document.createElement('div');
            projectTitleDiv.setAttribute('class', 'col-4');
            projectTitleDiv.innerText = projects[i].title;
            var projectCostDiv = document.createElement('div');
            projectCostDiv.setAttribute('class', 'col-4');
            projectCostDiv.innerText = projects[i].cost;
            var projectStrDiv = document.createElement('div');
            projectStrDiv.setAttribute('class', 'col-4');
            projectStrDiv.innerText = projects[i].stringQuantity;
            projectDiv.appendChild(projectTitleDiv);
            projectDiv.appendChild(projectCostDiv);
            projectDiv.appendChild(projectStrDiv);
            projectsDiv.appendChild(projectDiv);
        }
    };

    return UpdateView;
})();