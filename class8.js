class stall{
    constructor(product,price){
        this.product=product;
        this.price=price;
    }
    customer(){
        console.log(`${this.product} ${this.price}`);
    }
}
const openstall=new stall('TV',500);
    console.log(openstall);


    //example 9 
    //by object
    class teaStall{
        constructor(price,tea){
        this.price=price;
        this.tea=tea;
        }    
        seller(){
            console.log(`the products are:${tea} and ${price}`);
        } 
     
}
const TeaStall=new teaStall('Rs20','tea')
    console.log(TeaStall);

