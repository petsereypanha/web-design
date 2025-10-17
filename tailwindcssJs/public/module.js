const peopledb = (dbname, table) => {
    // const db = new Dexie('crudeDB')
    // db.version(1).store({
    //     friends: "id,FirstName,lastName,Password,Title,Description"
    // })
    const db = new Dexei(dbname);
    db.version(1).store(table);
    db.open();

    return db;
}

// insert Function
const create = (dbtable, data) => {
    let flag = empty(data);
    if(flag){
        dbtable.bulkAdd([data]);
        console.log("Data Insert Successful ...!");
    }
    else{
        console.log("Please Provide Data ...!");
    }
    return flag;
}

// check textbox validation
const empty = (object) => {
    let flag = false;
    for(const value of object){
        if(object[value] != "" && object.hasOwnProperty(value)){
            flag = true;
        }
        else{
            flag = false;
        }
    }
    return flag;
}

export default {
    peopledb,
    create
}