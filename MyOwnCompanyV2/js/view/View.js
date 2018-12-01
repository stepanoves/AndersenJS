class View {

    constructor(){
        this.__itemView = new ItemView();
        this.__fireButton = new FireButton();
    };

    updateProjects(projects, projectDiv) {
        projectDiv.innerHTML = null;

        for(let project of projects) {
            projectDiv.appendChild(this.__itemView.generate(project));
        }
    }
    updateItems(itemList, itemDiv) {
        itemDiv.innerHTML = null;

        for (let item of itemList) {
            itemDiv.appendChild(this.__itemView.generate(item));
            itemDiv.appendChild(this.__itemView.generate(item));
        }
    }

    updateBudget(currentBudget, budgetField) {
        budgetField.innerText = currentBudget;
    }
}