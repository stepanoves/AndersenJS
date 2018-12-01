class Project extends AbstractEntity {
    constructor(title, cost, developersQuantity, stringQuantity) {
        super();
        this.__title = title;
        this.__cost = +cost;
        this.__developersQuantity = +developersQuantity;
        this.__stringQuantity = +stringQuantity;
        this.__manager = {};
        this.__developers = [];
    }

    get title() {
        return this.__title;
    }

    get cost() {
        return this.__cost;
    }

    get manager() {
        return this.__manager;
    }

    get developers() {
        return this.__developers;
    }

    get developersQuantity() {
        return this.__developersQuantity;
    }

    get stringQuantity() {
        return this.__stringQuantity;
    }

    set manager(manager) {
        this.__manager = manager;
    }

    get toString() {
        return `Title: ${this.title}, Cost: ${this.cost},
                Developers Quantity: ${this.developersQuantity}, Strings: ${this.stringQuantity}`;
    }

    set developer(developer) {
        this.__developers.push(developer);
    }

    set stringQuantity(quantity) {
        this.__stringQuantity = quantity;
    }

    stringQuantityAtTime() {
        let quantity = 0;

        for (let developer of this.__developers) {
            console.log(developer);
            quantity += developer.stringQuantity;
        }

        return this.__manager.coefficient * quantity;
    }



    subStrings() {
        this.__stringQuantity -= this.stringQuantityAtTime();
        console.log(this.__developers.length);
    }
}