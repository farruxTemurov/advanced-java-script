const btn = document.querySelector('#btn');

const moveCar = () => {
    const car = document.querySelector('.car');
    let position = 0;

    const animationId = setInterval(moving, 1);

    function moving() {
        if (position === 1340) {
            clearInterval(animationId)
        } else {
            position++
            car.style.left = position + 'px';
        }
    }
}

btn.addEventListener('click', moveCar);

// SetTimeOut bu bitta function qanchadir sekunddan keyin bir marotaba ishga tushadi
// SetInterval bu bitta function har qanchadir sekundda ishga tushadi

// btn.addEventListener('click', () => {
// 	timerId = setInterval(logger, 500)
// })

// function logger() {
// 	if (index === 5) {
// 		clearInterval(timerId)
// 	}
// 	console.log('Hello world')
// 	index++
// }

// let id = setTimeout(function log() {
// 	console.log('Hello world')
// 	id = setTimeout(log, 1000)
// }, 1000)