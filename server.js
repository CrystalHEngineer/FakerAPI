const express = require("express");
const { random, address } = require("faker");

var faker = require('faker');   

var random_id = faker.random.uuid();
var firstName = faker.name.firstName();
var lastName = faker.name.lastName();
var phoneNumber = faker.phone.phoneNumber();
var email = faker.internet.email();
var password = faker.internet.password();

var randomId = faker.random.uuid();
var randomName = faker.name.findName();
var randomAddress = faker.address.streetAddress();
var randomCity = faker.address.city();  
var randomState = faker.address.state();
var randomZipCode = faker.address.zipCode();
var randomCountry = faker.address.country();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

class User {
    constructor() {
        this.random_id = faker.random.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}
console.log(new User());

class Company {
    constructor() {
        this.randomId = faker.random.uuid();
        this.randomName = faker.name.findName();
        this.randomAddress = faker.address.streetAddress();
        this.randomCity = faker.address.city();
        this.randomState = faker.address.state();
        this.randomZipCode = faker.address.zipCode();
        this.randomCountry = faker.address.country();
    }
}
console.log(new Company());

app.get("/api/users/new", (request, response) => {
    console.log(request.url);
    console.log(request.body);
    console.log(new User());

    response.json([
        {
            id: random_id,
            firstName: firstName,
            lastName: lastName,
            phone: phoneNumber,
            email: email, 
            password: password

        } 
    ])
});

app.get("/api/companies/new", (request, response) => {
    console.log(request.url);
    console.log(request.body);
    console.log(new Company());

    response.json([
        {
            id: randomId,
            name: randomName,
            address: randomAddress,
            city: randomCity,
            state: randomState,
            zipCode: randomZipCode,
            country: randomCountry
        },
    ])
});

app.get("/api/user/company", (request, response) => {
    console.log(request.url);
    console.log(request.body);
    console.log(new Company(), new User());

    response.json([
        {
            id: random_id,
            firstName: firstName,
            lastName: lastName,
            phone: phoneNumber,
            email: email, 
            password: password,
            id: randomId,
            name: randomName,
            address: randomAddress,
            city: randomCity,
            state: randomState,
            zipCode: randomZipCode,
            country: randomCountry
        },
    ])
});

app.listen(8000, () => {
    console.log("You have successfully connected on port 8000.");
});

