// Lodash
const _= require('lodash');

// Only change code below this line
// users nested array with four objects starts here
var users = [
    {
        firstName: 'John',
        lastName: 'Doe',
        age: 24,
        gender: 'male'
    },
    {
        firstName: 'Jane',
        lastName: 'Doe',
        age: 5,
        gender: 'female'
    },
    {
        firstName: 'Jim',
        lastName: 'Carrey',
        age: 54,
        gender: 'male'
    },
    {
        firstName: 'Kate',
        lastName: 'Winslet',
        age: 40,
        gender: 'female'
    }
];
// users nested array with four objects ends here

// getUsers function - list of users starts here
function getUsers() {
    var output = '';
    var i;
    for (i = 0; i < users.length; i++) {
        console.log(`${users[i].firstName} ${users[i].lastName} is ${users[i].age}, ${users[i].gender}\n`);
    }
    return output;
}
// getUsers function - list of users ends here

// findUser(lastName, gender) function starts here
function findUser(lastName, gender) {
    try {
        var user = _.find(users, {'lastName': lastName, 'gender': gender}); // add appropriate code here
        var iFindUser = `${user.firstName} ${user.lastName} is ${user.age}, ${user.gender}`;
        console.log(iFindUser);
        return iFindUser;
    } catch (error) {
        return console.log("Cannot read property 'firstName' of undefined");// Change this line
         // Change this line
    }
}
// findUser(lastName, gender) function ends here
// Only change code above this line
getUsers();
findUser('Winslet', 'male'); //Change this line

module.exports = findUser;