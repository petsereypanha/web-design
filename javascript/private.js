//const input = require("prompt-sync")();
class  Product{
    
    constructor() {
        this.constructor.qty++;
    }
    static #Output(){
        
    }
    static  qty = 20;
    #name;
    #price;
    getQty(){
        return Product.qty;
    }
    Input(name,price){
//        name = input("Input Name :");
//        price = input("Input price :");
        this.#price = name;
        this.#name = price;
    }
    
}
 
const per = new Product();

console.log(per.getQty());