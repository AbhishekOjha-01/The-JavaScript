// Objects in more depth.

// const instaUser = new Object() 
// or
const instaUser = {}

instaUser.name = "Abhishek"
instaUser.age = 20,
instaUser.isLoggedIn = true

console.log(instaUser)

// Object can store objects inside it.

const regularUser = {
    email: "abc@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Abhishek",
            lastName: "Kumar Ojha"
        }
    }
}

console.log(regularUser)
console.log(regularUser.fullName)
console.log(regularUser.fullName.userFullName)
console.log(regularUser.fullName.userFullName?.firstName)

// ? ensures the availibility

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

const obj3 = {obj1, obj2}
// a better way to concat

// const obj4 = Object.assign(obj1, obj2)

const obj4 = Object.assign({}, obj1, obj2)

// {} --> used to reeturn all things in new object.

console.log(obj3)
console.log(obj4)

// a most used syntax

const obj5 = {...obj1, ...obj2}
console.log(obj5)

// a most used syntax in case of database

console.log(Object.keys(instaUser))
// returns the keys 

console.log(Object.values(instaUser))
// return the values

console.log(Object.entries(instaUser))


console.log(instaUser.hasOwnProperty(instaUser))

/**
 * 1. Study about objects.
 */