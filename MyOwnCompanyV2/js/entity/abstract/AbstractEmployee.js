class AbstractEmployee extends AbstractEntity{
    constructor(name, surname) {
        super();
        this.__name = name;
        this.__surname = surname;
        this.__isFire = false;
    }

    get name() {
        return this.__name;
    }

    get surname() {
        return this.__surname;
    }

    get toString() {
        return `Name: ${this.name}, Surname: ${this.surname} `;
    }

}

AbstractEmployee.canFire = true;