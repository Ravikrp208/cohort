// Question 1 class object

let Animal = class {
    constructor()
    {
        this.name="Ravi kumar pandit";
        this.course="BCA";
    }


}
let ani1 =new Animal();



// Question 2 inhretance

class Animals{
    constructor()
    {
        this.hand=2;
        this.legs=2;
    }
    eat (){};
    brathe(){};
};

class Kekda extends Animals{
    constructor()
    {
        super()
        this.legs=8;
        this.hand=0;
    }
    brain(){}
};

let k1 =new Kekda();


// Question 3 

class Warn{
    constructor ()
    {
        this._age =24;

    }
    set age(val)
    {
        if(val<0)
        {
            console.log("not");
            return;
        }

        this._age= val;
    }
    get age()
    {
        return
        this._age;
    }

}

let ai = new Warn();
ai._age=37;


// Question 4

// let User ={
//     constructor
//     name :"Ravi kumar"
//     email:"ranikarp@gmail.com"
//     login : function() 
//     {
//         console.log("log in successfully");
//     }

// }
class User{
    constructor(name , email)
    {
        this.name= name;
        this.email= email;
    }
    login(){
        console.log("log in successfully")
    }
}
let user1 = new User("Ravi kuamr pandit ", "ravikarp@gamilcom");
let user2 = new User ("Rani kumari ", "ranikar@gmail.com");

// Question 5

class Car {
    constructor (brand , speed)
    {
        this.brand = brand;
        this.speed = speed;
    }
   drive()
   {
    return this.brand + " _" + this.speed;
   }
}

let car1 = new Car("RRR",280);
let car2 = new Car ("toyata",180);

// Question 6

class Student {
    constructor( name, rollnumber)
    {
        this.name = name;
        this.rollnumber =rollnumber;

    }
    intruduce = function()
    {  console.log(this.name + "" + rollnumber);

    }
  
}

let student = new Student("Ravi kuamar panadit",10021)