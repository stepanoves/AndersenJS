class Manager extends AbstractEmployee {
    constructor(name, surname, coefficient) {
        super(name, surname, coefficient);
        this.__coefficient = +coefficient;
    }

    get coefficient() {
        return this.__coefficient;
    }

    get toString() {
        return `${super.toString}, Coefficient: ${this.coefficient}`;
    }
}