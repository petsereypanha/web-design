let arr = [
    {id: 1,name: "Kakak",gender: "Male"},
    {id: 2,name: "Jon",gender: "Male"},
    {id: 3,name: "Rithy",gender: "Female"},
    {id: 4,name: "Jing",gender: "Fmale"},
    {id: 5,name: "Ming",gender: "Male"},
    ]
// for loop
for(let i =0; i < arr.length; i ++){
//    console.log(arr[i]);
//    console.log(arr[i].id);
//    console.log(arr[i].name);
//    console.log(arr[i]);
}
// while loop
let j = 0;
while (j < arr.length){
//    console.log(arr[j]);
//    console.log(arr[j].name);
//    console.log(arr[j]);
    j++;
}
// do while loop
let z = 0;
do{
//   console.log(arr[z]);
    z++
}while (z < arr.length);

for (let element of arr){
    //    console.log(element);
    //    console.log(element.id);
//    console.log(element.id +" "+ element.name+ " "+element.gender);
}
for(let item in arr){
//    console.log(item)
    if (item == 2){
//        console.log(arr[item]);
    }
}
arr.forEach((item) => {
    //    console.log(item)
    //    console.log(item.id)
//        console.log(item.name)
})
arr.map((item,index) => {
//    console.log(item);
//    console.log(index+" "+item.id+" "+item.name+" "+item.gender);
})

function check(arr){
    if(arr.id == 2){
        return true;
    }else {
        return false;
    }
}

let result = arr.filter(check);

console.log(result);

console.log("================| For Loop  |===================");

var arr = ["Sok","Dara","Kaka","Jon"];
for(var i=0; i<arr.length;i++){
    console.log("Arrays ["+i+"] :"+arr[i]);
}

console.log("================| While Loop  |===================");
var i =0;
while(i<arr.length){
    console.log("Arrays ["+i+"] :"+arr[i]);
    i++;
}

console.log("================| do While Loop  |===================");
var i =0;
do{
    console.log("Arrays ["+i+"] :"+arr[i]);
    i++;
}while(i<arr.length);
console.log("================| for in Loop  |===================");
for(var i in arr){
    console.log(arr[i]);
}
console.log("================| for of Loop  |===================");
for(var i of arr){
    console.log(i);
}
console.log("================| Map Loop  |===================");
arr.map((items,index) => {
    console.log(index +" "+ items)
})
console.log("================| for Each Loop  |===================");
arr.forEach(
    items => {
        console.log(items)
    }
)