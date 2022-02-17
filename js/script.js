"use strict"

// TASK 1

const birthdayDate = new Date('1995-06-18');
let result = birthdayDate.toLocaleDateString();
console.log(result);


// TASK 2

const getDiffDays = (a, b) => {
    let firstDate = Date.parse(a);
    let lastDate = Date.parse(b);
    if ( isNaN(firstDate) === true || isNaN(lastDate) === true ) {
        console.error("Введите корректные даты!");
        return;
    } else if (lastDate <= firstDate ) {
        console.error("Первая дата более поздняя, чем вторая!");
        return;
    } else {
        return (lastDate - firstDate) / 1000 / 60 / 60 / 24;
    }
}


console.log(getDiffDays('2020-01-01', '2020-01-17')); 
console.log(getDiffDays('2020-01-01', '2020-03-15')); 
console.log(getDiffDays('2021-01-02', '2020-03-15')); 
console.log(getDiffDays('222222222', '2020-03-15')); 


// TASK 3

const isWeekend = (a) => {
    let date = new Date(a);
    let weekday = date.getDay();
    if ( weekday === 0 || weekday === 6) {
        return true;
    } else {
        return false;
    }
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
