//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function getFavoriteFood(people){
    console.log('my favorite pizza is')
    for(let p of people.pizza){
        console.log(p)
    }
    console.log('my favorite taco is')
    console.log(people.tacos)
    console.log('my favorite burger is')
    console.log(people.burgers)
    console.log('my favorite ice cream is')
    for(let p of people.ice_cream){
        console.log(p)
    }
    console.log('my favorite shakes is ')
    console.log(people.shakes[0].oberwise)
    console.log(people.shakes[0].dunkin)
    console.log(people.shakes[0].culvers)
    console.log(people.shakes[0].mcDonalds)
    console.log(people.shakes[0].cupids_candies)

}

(getFavoriteFood(person3))

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person() {
    this.name = 'collum'
    this.age = 0

}

// Use an arrow to create the printInfo method
Person.prototype.printinfo = function() {
    console.log(this.name,this.age)
}
// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 
Person.prototype.addAge = function(a) {
    this.age += a
}

const p1 = new Person()
const p2 = new Person()
p1.addAge(25)
p1.printinfo()
p2.printinfo()
// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
function greaterThanTen(number){
    let promise = new Promise(function(resolve, reject){
        if(number > 10){
            console.log('big word')
        } else {
            console.log('small number')
        }
        resolve()
    })
    return promise
}
greaterThanTen(20)