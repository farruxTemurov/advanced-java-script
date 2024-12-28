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

// const arr = [2, 4, 5, 1, 25];

// const result = arr.reduce((prev, current) => prev + current, 10);
// console.log(result);

const colors = ['red', 'blue', 'black', 'yellow', 'green'];

console.log('Massiv uzunligi:', colors.length);
console.log('Oxirgi elementni o\'chirish:', colors.pop());
console.log('Oxiriga element qo\'shish:', colors.push('Brown'));
console.log('Olididagi elementni o\'chirish:', colors.shift());
console.log('oldiga element qo\'shish', colors.unshift('Turqoise'));

// Pop va Push
// Pop - bu massivni oxiridagi elementi o'chiradi
// Push - bu massivni oxiriga yangi element qo'shadi

// Shif va Unshift
// Pop - bu massivni oldidagi elementi o'chiradi
// Push - bu massivni oldiga yangi element qo'shadi

const cars = ['BMW', 'Merc', 'Audi', 'Suzuki', 'Subaru']
// Sort method
cars.sort()  // alphabet tartibda joylashtiradi
console.log(cars)

// sort methodni raqamlarga ishlatish uchun function yozish kk
const n = [23, 34, 7, 12, 74, 5]
n.sort(compareNum)
function compareNum(a, b) {
    return a - b
}
console.log(n)


for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

for (car of cars) {
    console.log(car);
}

colors.forEach((index, item, arr) => {
    console.log(`${index}: ${item} in array ${arr}`);
})

const numbers = [1, 2, 3, 4, 5]
numbers[99] = 100   // index yordamida arrayga ma'lumot qo'shish xato, chuni buzilib ketadi; o'rniga push ishlatiladi
console.log(numbers.length)
console.log(numbers)

// Split

const socialMedia = 'Youtube, Telegram, Instagram'
const arr = socialMedia.split(', ') //split(' ') breaks the string into a list of words, using the space character as the delimiter.
const text = arr.join('-') //The join() function concatenates elements within an iterable, such as a list, into a single string.
console.log(arr)
console.log(text)