class Person{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }

    getData(url){
      fetch(url,{
        method: 'GET',
        body: JSON.stringify(this.firstName + this.lastName),
        headers: {
          'Content-Type' : 'application/json'
        }
      })
      .then(res => {
        return res.json()
      })
  }
}

class Medic extends Person{
    constructor (firstName, lastName, speciality){
        super(firstName, lastName);
        this.specialty = speciality;
    }
}

let Nain = new Medic("Nain", "Pedroza", "Professor");
Nain.getFullName()
Nain.getData('https://www.google.com');
