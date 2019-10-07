import isYes from '../src/isYes.js';

const quizbtn = document.getElementById('quizbtn');
const correctAnswers = document.getElementById('correct');
const results = document.getElementById('results');

let correct = 0;
quizbtn.onclick = () => {
    const userName = prompt('What is your name?');
    alert(`Hello ${userName} do you want to take my quiz?`);
    const answer1 = prompt('Do I like to play pool?');
    const lowerAnswer1 = answer1.toLowerCase();
    if (isYes(lowerAnswer1) === true) {
        correct++;
        correctAnswers.textContent = correct;
        alert('Yes I do!');
    }
    else {
        alert('Read about me again');
    }
    const answer2 = prompt('Do I love my Dog?');
    const lowerAnswer2 = answer2.toLowerCase();
    if (isYes(lowerAnswer2) === true) {
        correct++;
        correctAnswers.textContent = correct;
        alert('Correct!');
    } else {
        alert('guess again');
    }
    const answer3 = prompt('Do I enjoy camping?');
    const lowerAnswer3 = answer3.toLowerCase();
    if (isYes(lowerAnswer3) === true) {
        correct++;
        correctAnswers.textContent = correct;
        alert('Of Course');
    } else {
        alert('try again');
    }
    if (correct === 3) {
        results.innerHTML = `${userName} you got ${correct}/3!`;
        results.style.color = 'green';   
    }
    else {
        results.innerHTML = `${userName} you got ${correct}/3!`;
        results.style.color = 'red';

    }
};









