const i = require("prompt-sync")();

let code  = parseInt(i("Input Code  :"));
let name  = i("Input Name  :");
let qty   = parseInt(i("Input Qty    :"));
let price = parseFloat(i("Input Price  :"));
let Payment = qty * price;

//let dis = (Payment <= 100)? 10 : 20  ;
//
//if(Payment <= 100){
//    dis = 10;
//}else{
//    dis = 20;
//}

let dis = (Payment <= 100)? 10 : (Payment >100 && Payment <= 500)? 20 : 30;

if(Payment <= 100){
    dis = 10;
}else if(Payment >100 && Payment <= 500){
    dis = 20;
}else{
    if(Payment > 500){
        dis = 30;
    }
}

let Total = Payment - Payment*dis/100;

console.log("Output  :"+code +"  "+ name +"  "+qty+"  "+price+"  "+Payment+"$  "+dis+"%  "+Total+"$");