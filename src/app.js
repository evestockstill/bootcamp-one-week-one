import isYes from '../src/isYes.js';

const quizbtn = document.getElementById('quizbtn');
const correctAnswers = document.getElementById('correct');
const results = document.getElementById('results');

let correct = 0;

quizbtn.onclick = () => {
    
    const userName = prompt('What is your name?');
    alert(`Hello ${userName} do you want to take my quiz?`);

    const answer1 = prompt('Do I like to play pool?');
    if (isYes(answer1) === true) {
        correct++;
        correctAnswers.textContent = correct;
        alert('Yes I do!');
    }
    else {
        alert('Read about me again');
    }
    const answer2 = prompt('Do I love my Dog?');
    if (isYes(answer2) === true) {
        correct++;
        correctAnswers.textContent = correct;
        alert('Correct!');
    } else {
        alert('guess again');
    }
    const answer3 = prompt('Do I enjoy camping?');
    if (isYes(answer3) === true) {
        correct++;
        correctAnswers.textContent = correct;
        alert('Of Course');
        results.innerHTML = `${userName} you got ${correct}/3!`;
    } else {
        alert('try again');
    }
};









