// Yuzaki clonlash
// Chuqur clonlash

const person = {
    name: 'Samar',
    age: 22,
    hobbies: {
        games: 'UFC',
        sport: 'Football',
    },
}

// #1

// const copyObj = (obj) => {
//     const clone = {}

//     for (let key in obj) {
//         clone[key] = obj[key];
//     }

//     return clone;
// }

// const secondPerson = copyObj(person);
// secondPerson.name = 'Yusuf'
// secondPerson.age = 21
// secondPerson.hobbies.games = 'Blur'
// console.log(person);
// console.log(secondPerson);

// #2. Object assign

// const secondPerson = Object.assign({ isMarried: false }, person);
// secondPerson.name = 'Yusuf'
// secondPerson.age = 21
// secondPerson.hobbies.games = 'Blur'
// console.log(person);
// console.log(secondPerson);

// #3 Spread operator

// const secondPerson = { ...person };
// secondPerson.name = 'Yusuf'
// secondPerson.age = 21
// console.log(person);
// console.log(secondPerson);

// Array clonlash

// #1 Slice method yordamida

const cars = ['BMW', 'Audi', 'Hyundai'];
const clone = cars.slice();
clone.push('Suzuki');

// #2 Spread operator

const copy = [...cars];
copy.push('Subaru');

console.log(cars)
console.log(clone)
console.log(copy)

