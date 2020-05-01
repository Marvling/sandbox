"use strict";

function greetings(){
    return 's.a kanka';
}

let message = greetings();
console.log(message);

// alert('hello canım');

let admin;
let name = 'John';

admin = name;
console.log(admin);



let userName = prompt('name?', defaultStatus);
let result = confirm(`is your name ${userName}?`);

    if (result === true) {
        alert(`${userName}`);
}

