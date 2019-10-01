import { isCorrect } from './functions.js';

const quizbtn = document.getElementById('quizbtn');
// quizbtn.addEventListener('click');

    

quizbtn.onclick = () => {
    alert('welcome to my quiz!');
    const myConfirmation = confirm('do you want to take my quiz?');
    console.log(myConfirmation);
    
    const userAnswer = prompt('is my favorite color bluish');
    const lowerCaseUserAnswer = userAnswer.toLowerCase();
    const trimmedLowercaseUserAnswer = lowerCaseUserAnswer.trim;
    const userIsCorrect = isCorrect(trimmedLowercaseUserAnswer);
    if (userIsCorrect === 'yes') {
        alert('you got it right!');
    } else ('no! guess again!');
};










// document.getElementById('quizbtn').addEventListener('click');