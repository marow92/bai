class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    displayFullName(){
        return `${this.name} ${this.surname.toUpperCase()}`;
    }

    displayInitials(){
        return `${this.name.charAt(0).toUpperCase()}.${this.surname.charAt(0).toUpperCase()}`
    }
}

const nowak = new Person('Jan', 'Nowak')
const wachala = new Person('Marek', 'Wąchała')

console.log(nowak.displayFullName())
console.log(nowak.displayInitials())
console.log(wachala.displayFullName())
console.log(wachala.displayInitials())