class Person{
    constructor(name, id){
        this.name = name;
        this.id = id
    }
    static personInstance(name, id){
        return new Person(name, id)
    }
}

let tamim = Person.personInstance('tamim', 45)
alert(tamim.name)