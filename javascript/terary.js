const prompt = require('prompt-sync')();

var id;
var name,gender,position;
var salary,bonus,income;

console.log("\n");
id = prompt("Input ID   :");
name = prompt("Input Name  :");
gender = prompt("Input Gender :");
salary = parseFloat(prompt("Input salary :"));
position = prompt("Input Position :");

bonus =  (position == ("Manager"||"manager"))? 20 :
         (position == ("Accounting"||"accounting"))? 15 :
         (position == ("IT"))? 25 : 10;

income = salary + (salary*bonus)/100;

console.log("\n"+id+"  "+name+"  "+gender+"  "+salary+"  "+bonus+"  "+income);
