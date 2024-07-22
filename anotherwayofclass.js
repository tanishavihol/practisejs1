//another way to do the same thing
function User(username,email,password){
        this.username=username;
        this.password=password;
        this.email=email;
}
User.prototype.encryptPassword=function(){
    return `${this.password}abc`
}
const tea=new User("tea","tea@gmail.com","123")
console.log(tea.encryptPassword());