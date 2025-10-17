const db = new Dexie('crudeDB')
db.version(1).store({
    friends: "id,FirstName,lastName,Password,Title,Description"
})