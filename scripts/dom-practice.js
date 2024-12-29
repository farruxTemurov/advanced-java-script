const box = document.querySelector('#box');
const buttons = document.querySelectorAll('button');
const wrapper = document.querySelector('.wrapper');
const hearts = wrapper.querySelectorAll('.heart');
const circles = document.querySelectorAll('.circle');

box.style.backgroundColor = 'red';
// circles[0].style.borderRadius = '0';
// hearts[0].style.backgroundColor = 'black'

for (let i = 0; i < circles.length; i++) {
    circles[i].style.borderRadius = '0';
}
