var Person = [
    {
        id : 1,
        name : "Sok",
        gender : "male",
        age : 34,
    },
    {
        id : 2,
        name : "Kaka",
        gender: "female",
        age : 21
    },
    {
        id : 3,
        name : "Jon",
        gender : "male",
        age:  28
    },
    {
        id : 4,
        name : "Rithy",
        gender: "male",
        age : 17
    }
]
// Update

Person[1].gender = "male"
var idUpdate = 3;
Person.map((item,index) => {
    if(item.id == idUpdate){
        Person[index].name = "Heang"
        Person[index].age = 16
    }
})

//  Dleted
var idDelete = 4;
var arr = [];
Person.map((item,index) => {
    if(item.id != idDelete){
        arr.push(item);
    }
})
Person = arr;
// function fitter
var idDelete = 2;

Person = Person.filter((item,index) => item.id != idDelete)

console.log(Person[0])
console.log(Person[0].name)
console.log("============= For Loop ================");
for(var i=0; i<Person.length ; i++){
    console.log(Person[i].id + " " + Person[i].name + " " + Person[i].gender + " " + Person[i].age)
}

console.log("============= Map Loop ================");
Person.map((items,index) => {
    console.log(index + " " + items.id + " "+ items.name + " " + items.gender + " " + items.age)
})

console.log("============= For of Loop ================");
for(var elment of Person){
    console.log(elment.id + " " + elment.name + " " +elment.gender + " "+ elment.age)
}
console.log("============= For Each Loop ================");

Person.forEach(items=>{
    console.log(items)
})