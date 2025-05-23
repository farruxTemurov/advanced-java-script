let numberOfSeries

startApp()

const seriesDB = {
    count: numberOfSeries,
    series: {},
    actors: {},
    genres: [],
    private: false,
}


setFavouriteSeries()
detectingLevel()
writeGenres()
showDb(seriesDB.private)

function startApp() {
    numberOfSeries = +prompt('Nechta serial ko’rdingiz?', '')

    while (
        numberOfSeries == '' ||
        numberOfSeries == null ||
        isNaN(numberOfSeries)
    ) {
        numberOfSeries = +prompt('Nechta serial ko’rdingiz?', '')
    }
}

function setFavouriteSeries() {
    for (let i = 0; i < 2; i++) {
        const a = prompt(`Oxirgi ko’rgan serialingiz ${i + 1}?`, '')
        const b = prompt(`Nechi baxo berasiz? ${i + 1}`, '')

        if (a !== null && b !== null && a !== '' && b !== '') {
            seriesDB.series[a] = b
        } else {
            i--
        }
    }
}

function detectingLevel() {
    if (seriesDB.count < 5) {
        console.log("Kam serial ko'ripsiz")
    } else if (seriesDB.count >= 5 && seriesDB.count < 10) {
        console.log('Siz classik tamoshabin ekansiz')
    } else if (seriesDB.count >= 10) {
        console.log('Siz serialchi zvezda ekansiz')
    }
}

function writeGenres() {
    for (let i = 0; i < 3; i++) {
        const genre = prompt(`Yaxshi ko'rgan janringiz ${i + 1}?`, '')
        seriesDB.genres[i] = genre
    }
}

function showDb(isPrivate) {
    if (!isPrivate) {
        console.log(seriesDB)
    } else {
        console.log("Ma'lumot mahfiy saqlanmoqda")
    }
}


// string methods

let text = 'Hello World';
let password = '    password     ';

//Length is property

console.log('text uzunligi', text.length);


// Methods

console.log('Aniq positsiyali indexdagi harf', text.charAt(2));
console.log('Harflarni katta registerda qilish', text.toUpperCase());
console.log('Harflarni kichik registerda qilish', text.toLowerCase());
console.log('Harfni kesish', text.slice(0, 4));  // can also give negative positions (0, -4)
console.log('Harfni kesish', text.substring(0, 4));
console.log('Ikki tarafdan bo\'sh space olib tashlash', password.trim());
console.log('Boshidan space olib tashlash', text.trimStart());
console.log('Oxiridan space olib tashlash', text.trimEnd());

// Number methods

const number = 12.6
const width = '240.42px'

console.log('sonni eng yaqiniga o\'giradi', Math.round(number));
console.log('sonni butun qilib beradi', Math.floor(number));
console.log('String ma\'lumot turidan butun sonni qaytarib beradi', parseInt(width));
console.log('String ma\'lumot turidan butun son qilib beradi', parseFloat(width));


