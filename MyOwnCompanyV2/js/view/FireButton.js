class FireButton {

    constructor(){
        this.__button = document.createElement('button');
        this.__button.setAttribute('class', 'bnt btn-danger');
        this.__button.innerText = 'Fire';
    };

    generate(employee, employeeList) {

        this.__button.addEventListener('click', () => {
            employeeList = employeeList.filter(empl => empl !== employee);
        });
    }


}