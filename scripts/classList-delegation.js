const btns = document.querySelectorAll('button'),
    wrapper = document.querySelector('.wrapper')

// delegation is like adding event listeners to the parent of the element
wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.matches('button.blue')) {
        console.log('Clicked');
    }
});

const button6 = document.createElement('button');
button6.classList.add('blue');
button6.textContent = 6;
wrapper.append(button6);

const button3 = wrapper.querySelector('#btn3');
button3.classList.add('yellow');
button3.textContent = 7;
wrapper.append(button3);
// console.log(btns[0].classList.value);
// console.log(btns[0].classList.item(0));


if (btns[1].classList.contains('red')) {
    console.log('Element contains red class');
}

btns[0].addEventListener('click', () => {
    btns[0].classList.toggle('red');
});

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', () => {
        btns[i].classList.toggle('yellow');
    })
}

