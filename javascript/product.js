//  npm init 
//  npm i prompt-sync

const input = require("prompt-sync")();

let code = input("Input Code    :");
let name = input("Input Name    :");
let qty  = parseInt(input("Input Qty     :"));
let price = parseFloat(input("Input Price   :"));

let Total = qty * price;
let dis;
if(Total >= 1 && Total <  10){
    dis = 10;
}
else if(Total >= 10 && Total < 20){
    dis = 20;
}
else if(Total >= 20 && Total < 30){
    dis = 30;
}
else if(Total >= 30 && Total < 40){
    dis = 40;
}
else if(Total >= 40 && Total < 50){
    dis = 50;
}
else if(Total >= 50 && Total < 60){
    dis = 60;
}
else{
    if(Total > 60){
        dis = 70;
    }
}

let payment = Total - (Total*dis)/100;

console.log("\nOutput Code      :"+code);
console.log("Output Name      :"+name);
console.log("Output Qty       :"+qty);
console.log("Output Price     :"+price);
console.log("Output Total     :"+Total);
console.log("Output Dis       :"+dis);
console.log("Output Payment   :"+payment.toFixed(4));