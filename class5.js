class Person{
    constructor(firstname,lastname){
        this.firstname=firstname;
        this.lastname=lastname;
    }
    get fullname(){
        return `${this.firstname}${this.lastname}`;
    }
}
const person=new Person('John','Doe');
console.log(person.fullname);