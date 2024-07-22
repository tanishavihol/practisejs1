class Animal{
    //defines a new class
    constructor(name){
        //the constructor method is a special method for creating and initilizing an object created with a class 
        this.name=name;// this.name sets a property called 'name' to the value passed when the class is constructed 
    }
    speak(){
        //defines a method named 'speak' within the animal class 
        console.log(`${this.name}makes a sound.`);//logs a message to the console,including the animal's name
    }
}
const animal=new Animal('Lion');//creates a new instance of the Animal class,with the name 'lion'
animal.speak();
//calls the 'speak' method on the 'animal' instance