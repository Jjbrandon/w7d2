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

for(let i = 0; i < Object.keys(person3).length; i++){
    console.log(Object.values(person3)[i])
    if(Array.isArray(Object.values(person3)[i])){
        console.log(Object.values(person3)[i])
    }
}

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


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

    function Person(name,age){
    this.name = name;
    this.age = age;

    this.printInfo = () => {
        console.log(`My name is ${this.name}, and I am ${this.age} years old.`)

    }

    this.birthday = () => {
        year = 1
        console.log(`Happy birthday! You are now ${this.age+1}!`)
        this.age+=year
    }

    }
    let me = new Person('John', 26)

    console.log(me.printInfo())
    console.log(me.birthday())
    console.log(me.birthday())
    console.log(me.birthday())
    






// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const isBigString = (string) => {
    return new Promise( (resolve,reject) => {
        if(string.length > 10){
            resolve(true)
        } else {
            reject(false)
        }
    })
}

isBigString('avadocadabra')
.then( (result) => {
    console.log(`Big Word `)
})
.catch( (error) => {
    console.log(`Smol Word `)
})




// Definitely phoning it in a bit on these CodeWars problems D:
// But I learned some new useful syntax in prob 2


// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return True if yes, False otherwise :)


function hero(bullets, dragons){
    if (bullets >= dragons*2){
      return true
    }else{
      return false
    }
  }



 // Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.

 // This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);
  
 // This function should return a number (final grade). There are four types of final grades:
  
 // 100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
 // 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
 // 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
 // 0, in other cases



function finalGrade (exam, projects) {
  if(exam > 90 || projects > 10){
    return 100
  }else if(exam > 75 && projects >= 5){
    return 90
  }else if(exam > 50 && projects >= 2){
    return 75
    }else{
      return 0
      }
  }