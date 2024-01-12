// question 1
let person3 = {
    pizza: ["Deep Dish", "South Side Thin Crust"],
    tacos: "Anything not from Taco bell",
    burgers: "Portillos Burgers",
    ice_cream: ["Chocolate", "Vanilla", "Oreo"],
    shakes: [
        {
            oberwise: "Chocolate",
            dunkin: "Vanilla",
            culvers: "All of them",
            mcDonalds: "Sham-rock-shake",
            cupids_candies: "Chocolate Malt",
        },
    ],
};
function parse(person) {
    for (const foodtype in person) {
        if (Array.isArray(person[foodtype]) && foodtype != "shakes") {
            console.log(`${foodtype}: ${person[foodtype].join(", ")}`);
        }else if (typeof person[foodtype] === "string") {
            console.log(`${foodtype}: ${person[foodtype]}`);
        }else if (foodtype  == "shakes") {
            const shakesObject = person.shakes[0];
            for (const shake in shakesObject) {
                console.log(`${shake}: ${shakesObject[shake]}`)
            }
            
            
            
        }
    }
}
parse(person3)






// question 2
function Person(name, age){
    this.name = name;
    this.age = age;


    this.printInfo = (dob, race) => {
        console.log(`The person's name is ${this.name} and they are ${this.age} years old, they were born ${dob} and they are ${race}`)
        return 'end'
        
    }

    this.addAge = (age) => {
        this.age += age
    }
}

let person4 = new Person("Ryan", 32)
console.log(person4.printInfo('1991', "White"))

let person5 = new Person("John", 60)
console.log(person5.printInfo("1964", "African/American"))

person5.addAge(3)
person5.printInfo("1964", "African/American")





// Question 3
function checkLength(inputString) {
    return new Promise((resolve, reject) => {
        if (typeof inputString != "string") {
            reject(new Error("Input is not a string"));
        } else {
            if (inputString.length > 10) {
                resolve('Big word');
            } else {
                resolve('Small Number');
            }
        }
    });
}
const test1 = "Hello how are you doing today"
const test2 = 'Ryan'

checkLength(test1)
    .then(result => {
        console.log(result + " I am test1")
    })
    .catch(error => {
        console.log(error +  " I am test1")
    }); 

checkLength(test2)
    .then(result => {
        console.log(result + " I am test2")
    })
    .catch(error => {
        console.log(error +  " I am test1")
    })