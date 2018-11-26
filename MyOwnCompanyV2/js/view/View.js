class View {

    constructor(){
        this.__itemView = new ItemView();
    };

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