class Person{
    constructor(name, id){
        this.name = name;
        this.id = id
    }
    static personInstance(name, id){
        return new Person(name, id)
    }
}

let sakib = Person.personInstance('sakib', 45)
let rubel = Person.personInstance('rubel', 78)
console.log(rubel.id)