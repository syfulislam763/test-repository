class Person{
    constructor(name, id){
        this.name = name;
        this.id = id
    }
    static personInstance(name, id){
        return new Person(name, id)
    }
}

let musfiq = Person.personInstance('musfiq', 45)
let taskin = Person.personInstance('taskin', 78)
console.log(musfiq.id)