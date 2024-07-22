class Rectangle{
    constructor(width,height){
        this.width=width;
        this.height=height;
    }
    get area(){
        return this.width*this.height;
    }
}
const dimension=new Rectangle(10,5);
console.log("width:",'dimension.width');
console.log(`height:${dimension.height}`);
console.log(`area:${dimension.area}`);