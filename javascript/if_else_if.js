console.log("============== Array Object ===============");
   var Person = [
    {
        id: 11,
        fist: "Sok",
        last: "Lita",
        gender: "Male",
        telephone: "0929484"
    },
    {
        id: 22,
        fist: "Jing",
        last: "Kang",
        gender: "Female",
        telephone: "02838844"
    },
    {
        id: 33,
        fist: "Mar",
        last: "Rita",
        gender: "Male",
        telephone: "09273734"
    },
    {
        id: 44,
        fist: "Meng",
        last: "Rithy",
        gender: "Male",
        telephone: "09273734"
    },
   ];
// Upadet

   //    Person[3].gender = "Female";
    // way1
   // Update Person id = 3 => gender = Female;
   var idUpdate=33;
   Person.map((item,index)=>{
      if(item.id == idUpdate){
        Person[index].gender = "Female"
        Person[index].fist = "Malin"
        Person[index].last = "Kheang"
      }
   })
    //  Way2
     var idDelete = 11;
     Person = Person.map((item,index)=>{
         if(item.id == idDelete){
             return {
                 ...item,
                 telephone:"022226644"
             };
         }
         return item;
     });

     console.log("______| List Person Us Map |_______")
     Person.map((item,index)=>{
      console.log((index+1)+" "+item.id+" "+item.fist+" "+item.last+" "+item.gender+" "+item.telephone);
     })