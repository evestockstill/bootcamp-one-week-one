import isYes from '../src/isYes.js';

const quizbtn = document.getElementById('quizbtn');
// quizbtn.addEventListener('click');

    

quizbtn.onclick = () => {
    alert('Hello, thanks for taking the quiz');
    
    const answer1 = prompt('Do I like to play pool?');
    if (isYes(answer1) === true) {
        alert('Yes I do!');
    }
    else {
        alert('Read about me again');
    }
    const answer2 = prompt('Do I love my Dog?');
    if (isYes(answer2) === true) {
        alert('Correct!');
    } else {
        alert('guess again');
    }
    const answer3 = prompt('Do I enjoy camping?');
    if (isYes(answer3) === true) {
        alert('Of Course');
    }
    else {
        alert('try again');
    }
};









// document.getElementById('quizbtn').addEventListener('click');