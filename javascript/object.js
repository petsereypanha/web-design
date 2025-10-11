console.log("================| Object  |===================");
var obj = {};    // empty object
obj = {
    key1: "Lyta",
    key2: ["Sok","Dara","Kaka","Jon"],
    sub:{
        a: 1,
        b: 2,
        sub1 :{
            b: 23
        }
    }
}

console.log(obj.key1)
console.log(obj.key2)
console.log(obj.key2[2])
console.log(obj.sub.a)
console.log(obj.sub.sub1.b)

var person = {
    ...person,
    firstname : "Jing",
    lastname : "Kang",
    age : 30,
    box : {
        colorEye : "slate",
    }
}
console.log(person.firstname + " " + person.lastname);
console.log(Object.keys(person.box).length)