class ItemView {

    constructor(){}

    generate(item) {
        let itemView = document.createElement('div');
        itemView.setAttribute('class', 'row');
        itemView.innerText = item.toString;

        return itemView;
    }
}