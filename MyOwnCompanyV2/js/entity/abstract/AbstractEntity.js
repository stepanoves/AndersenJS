class AbstractEntity {
    constructor() {
        this.__status = false;
    }

    get status() {
        return this.__status;
    }

    set status(status) {
        this.__status = status;
    }

    changeStatus() {
        this.__status = !this.__status;
    }
}