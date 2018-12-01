class Developer extends AbstractEmployee {
    constructor(name, surname, position, stringQuantity) {
        super(name, surname);
        this.__position = +position;
        this.__stringQuantity = +stringQuantity;
    }

    get position() {
        return this.__position;
    }

    get stringQuantity() {
        return this.__stringQuantity;
    }
    get toString() {
        return `${super.toString}, 
            Position: ${Developer.POSITIONS[this.__position]}, Strings: ${this.__stringQuantity}`;
    }
}

Developer.POSITIONS = {
    0: 'JUNIOR',
    1: 'MIDDLE',
    2: 'SENIOR'
};