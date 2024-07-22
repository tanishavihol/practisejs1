class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    greet(){
        console.log(`hello ,my name is ${this.name} ${this,age}`);
    }
}
const person1=new Person('john',10);
console.log(person1);
//class person{
// constructor(name,age){
//     this.name=name;
//     this.age=age;
// }
// greet(){
//     console.log(`hello ,my name is ${this.name} ${this,age}`);
// }
// }
// const person1=new person1('john',10);
// console.log(person1);
// class person{
//     constructor(name,age){
//     this.name=name;
//     this.age=age;
// }
// greet(){
//     console.log(`hello ${this.name} ${this.age}`);
// }
// }
// const person1=new person('john',10);
// console.log(person1);
// class person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     greet(){
//         console.log(`hello ${this.name} ${this.age}`);
//     }
// }
//     const person1=new person('john',10);
//     console.log(person1);
