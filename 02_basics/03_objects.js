// Singleton

// Object Literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Dhruv",
    "full name": "Dhruv Mehta",
    [mySym]: "MyKey1",
    age: 24,
    location: "India",
    Email: "dhruvmehta1311@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.name);
// console.log(jsUser["Email"]);
// console.log(jsUser["full name"]);
// console.log(typeof jsUser[mySym]);

// jsUser.Email = "dhruv.mehta@finova.tech"
// Object.freeze(jsUser)
// jsUser.age = 25;
// console.log(jsUser.Email);
// console.log(jsUser.age);

// jsUser.greeting = function(){
    // console.log("Hello js User");
// }
// jsUser.greetingTwo = function(){
    // console.log(`Hello js User, ${this.name}`);
// }

// console.log(jsUser.greeting());
// console.log(jsUser.greetingTwo());


const myObj = {}

myObj.name = "Dhruv"
myObj.email = "dhruvmehta1311@gmail.com"

// console.log(myObj);

const nestedObj = {
    class: "12th",
    userDetails: {
        firstName: "Dhruv",
        lastName: "Mehta"

    }
}

// console.log(nestedObj.userDetails.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = Object.assign({}, obj1, obj2)

// Spread
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "test@yopmail.com"
    },
    {
        id: 1,
        email: "test@yopmail.com"
    },
    {
        id: 1,
        email: "test@yopmail.com"
    }
]

const tinderUser = {
    id: 324242,
    name: "Sammy",
    isLoggedIn: false
}

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));


const course = {
    courseName: "JavaScript in Hindi",
    coursePrice: "999",
    courseInstructor: "Hitesh"
}

const {courseInstructor} = course

console.log(courseInstructor);

// const navbar = ()=> {

// }

// navbar(company = "hitesh")



