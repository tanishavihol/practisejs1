class User{
    constructor(username,password,email){
        this.username=username;
        this.password=password;
        this.email=email;
    }
    encryptpassword(){
        return `${this.password}abc`
    }
    changeusername(){
        return `${this.username.toUpperCase()}`
    }
}
const chai=new User("tanu","123","random@gmail.com");
console.log(chai.encryptpassword());
console.log(chai.changeusername());
console.log(chai);