const promp = require('prompt-sync')();
class UI {
    display(){
        let Item,Cart,price,amount;
        Item = promp("Input Item  :");
        Cart = promp("Input Cart  :");
        price = parseFloat(promp("Input Price :"));
        amount = parseInt(promp("Input Amount :"));
        let Payment = price*amount;
        
        console.log("  "+Item+"  "+Cart+"  "+price+"  "+amount+"  "+Payment);
    }
    constructor(Income) {
        this.Income = Income;
    }
//    constructor() {
//       let Tax = 0.55;
//       console.log(Tax);
//    }
}

class Storage extends UI{
    constructor(Income,bunos) {
        super(Income);
        this.bunos = bunos;
    }
    get(){
        return this.bunos;
    }
}

//const  ui = new UI();
//ui.display();

//const ui2 = new UI();
//console.log(ui2)

//const ui1 = new UI(4000);
//console.log(ui1.Income);

const store = new Storage(333,999);
console.log(store)
console.log(store.bunos)
console.log(store.Income)
console.log(store.display())