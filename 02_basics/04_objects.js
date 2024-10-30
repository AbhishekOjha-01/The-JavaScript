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

