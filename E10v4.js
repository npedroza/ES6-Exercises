class Person{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }

    getData(url){
      url = encodeURI(url + '/find?name='+ this.getFullName());
      fetch(url,{
          method: 'GET',
          headers: {
            'Content-Type' : 'application/json',
            'Accept': 'application/json'
          }
      }).then((res) => res.json())
  }
}

class Medic extends Person{
    constructor (firstName, lastName, speciality){
        super(firstName, lastName);
        this.specialty = speciality;
    }
}

let Nain = new Medic("Nain", "Pedroza", "Surgery");
let final = Nain.getData("https://www.google.com")
