"use strict"

// TASK 1

// const birthdayDate = new Date('1995-06-18');
// let result = birthdayDate.toLocaleDateString();
// console.log(result);


// TASK 1 V2

const birthdayDate = new Date('1995-06-18');
let result = `${birthdayDate.getDate()}.0${birthdayDate.getMonth() + 1}.${birthdayDate.getFullYear()}`;
console.log(result);


// TASK 2

const getDiffDays = (a, b) => {
    let firstDate = new Date(a);
    let lastDate = new Date(b);
    const MILL_TO_DAYS = 86400000;  // (/ 1000 / 60 / 60 / 24) одним числом.
    if ( firstDate.toString() === "Invalid Date" || lastDate.toString() === "Invalid Date" ) {
        return console.error("Введите корректные даты!");
    } else if (lastDate <= firstDate ) {
        return console.error("Первая дата более поздняя, чем вторая!");
    } else {
        return (lastDate - firstDate) / MILL_TO_DAYS;
    }
}

console.log(getDiffDays("2020-01-01", "2020-01-17")); 
console.log(getDiffDays("2020-01-01", "2020-03-15")); 
console.log(getDiffDays("2021-01-02", "2020-03-15")); 
console.log(getDiffDays("2222222222", "2020-03-15"));


// TASK 3

const isWeekend = (date) => {
    const day = new Date(date).getDay();
    return day === 0 || day === 6;
}

console.log(isWeekend('2022-02-12')); 
console.log(isWeekend('2022-02-13')); 
console.log(isWeekend('2022-02-09')); 


// TASK 4

const person = {
    fullName: 'Sherlock Holmes',
    address: {
        street: "Baker Street",
        city: "London",
        house: "221b"
    }
}

let jsonPerson = JSON.stringify(person);
console.log(jsonPerson);

let user = JSON.parse(jsonPerson);
console.log(user);

const {fullName, address: {street, city, house} } = user;
console.log(fullName, street, city, house);
