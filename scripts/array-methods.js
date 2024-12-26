// MAP

// const arr = ['BMW', 'MERC', 'NEXIA', 'SUZUKI'];
// const result = arr.map(item => item.toLocaleLowerCase());
// console.log(result);

// FILTER

// const arr = [
//     {
//         name: 'BMW',
//         model: 2022,
//     },
//     {
//         name: 'MERC',
//         model: 2021,
//     },
//     {
//         name: 'NEXIA',
//         model: 2015,
//     },
// ];

// const result = arr.filter(item => item.model < 2020);
// console.log(result);

//EVERY/SOME

// const arr = ['September', 'October', 'August'];
// const some1 = arr.some(item => typeof item === 'number');
// console.log(some1);
// const every1 = arr.every(item => typeof item === 'string');
// console.log(every1);

//REDUCE

const arr = [2, 4, 5, 1, 25];

const result = arr.reduce((prev, current) => prev + current, 10);
console.log(result);