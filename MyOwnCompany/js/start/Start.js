;(function () {
    var titleField = document.querySelector('.title');
    var budgetField = document.querySelector('.budget');
    var startButton = document.querySelector('.start-btn');
    var addDevButton = document.querySelector('.add-dev');
    var addManagerButton = document.querySelector('.add-mngr');
    var addProjectButton = document.querySelector('.add-project');
    var projectTitleField = document.querySelector('.project-title');
    var projectCostField = document.querySelector('.project-cost');
    var devsQuantityField = document.querySelector('.devs-quantity');
    var projectStrQuantityField = document.querySelector('.project-str-quantity');
    var managerNameField = document.querySelector('.mngr-name');
    var managerSurnameField = document.querySelector('.mngr-surname');
    var managerExpField = document.querySelector('.mngr-exp');
    var devNameField = document.querySelector('.dev-name');
    var devSurnameField = document.querySelector('.dev-surname');
    var devPositionField = document.querySelector('.dev-position');
    var devStringsField = document.querySelector('.str-quantity');

    var application = new Application();

    startButton.addEventListener('click', function () {
        var title = titleField.value;
        var budget = budgetField.value;
        application.start(title, budget);
    });

    addDevButton.addEventListener('click', function () {
        var name =  devNameField.value;
        var surname = devSurnameField.value;
        var position = devPositionField.value;
        var stringQuantity = devStringsField.value;

        var developer = new Developer(name, surname, position, +stringQuantity)
        application.company.addDeveloper(developer);
    });

    addManagerButton.addEventListener('click', function () {
        var name =  managerNameField.value;
        var surname = managerSurnameField.value;
        var exp = managerExpField.value;

        var manager = new Manager(name, surname, exp);
        application.company.addManager(manager);
    });

    addProjectButton.addEventListener('click', function () {
        var title = projectTitleField.value;
        var cost = projectCostField.value;
        var devs = devsQuantityField.value;
        var str = projectStrQuantityField.value;
        var project = new Project(title, cost, +str, +devs)
        application.company.addProject(project);
    });

})();