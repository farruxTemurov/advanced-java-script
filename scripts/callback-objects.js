// Callback - bitta function bajarilgandan son'g bajarilgan function

function greeting(callback) {
    console.log('Hello students!');
    callback();
}

greeting(() => {
    console.log('Are you ready today?');
})


// Objects and destructuring

const person = {
    name: 'Tim',
    year: 2000,
    job: 'Full-Stack Web developer',
    hobbies: {
        sport: 'Karate',
        games: 'UFC'
    },

    sayHello: () => console.log('Hello World!')
}

person.sayHello();

//for in - objects
//for of = arrays 
// console.log(Object.keys(person).length);

for (let key in person) {
    if (typeof person[key] === 'object') {
        for (let i in person[key]) {
            console.log(`Property ${i}: Value ${person[key][i]}`);
        }
    } else {
        console.log(`Property: ${key} Value: ${person[key]}`);
    }
}

//Destructuring 

const { name, job, year, hobbies: { sport, games }, } = person;
console.log(games);