const mongoose = require('mongoose')
const faker = require("faker")
const User = require("../models/User");

(async function(){
console.log("Am I working?!")

mongoose.connect("mongodb://localhost:27017/ds-record-shop", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});
mongoose.connection.on(
    "error",
    console.error.bind(console, "connection error:")
);
mongoose.connection.on("open", () => {
    console.log("Connected to the database...");
});

// console.log("First I will delete all the User ")
console.log(" I am creating 20 fake User");



try {
    await User.deleteMany({});
    console.log("Old user moved to Spandau")
    console.log("User stored in Database ! ")
}catch(err){
    console.log(err)
}


const userPromises = Array(20).fill(null).map(() => {
    const user =  new  User ({
        firstName: faker.name.firstName(),
        lastName: faker.name.firstName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        birthday: faker.date.past(),
        userName: faker.internet.userName()
    })
    return user.save();
});
// Promise.all(userPromises).then(data => console.log("User stored in the Database")).catch()


    try {
        await Promise.all(userPromises);
        console.log("User stored in Database ! ")
    }catch(err){
        console.log(err)
    
    }

});
mongoose.connection.close();