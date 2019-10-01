// // IMPORT MODULES under test here:
// // import example from '../src/example.js';

// import { isCorrect } from './functions.js';
// const test = QUnit.test;

// // test('time to test a function', function(assert) {
// //     //Arrange
// //     // Set up your parameters and expectations

// //     //Act 
// //     // Call the function you're testing and set the result to a const

// //     //Assert
// //     // Make assertions about what is expected valid result
// //     assert.equal(true, false);
// // });

// test ('should return true if the user says yes', function(assert) {
//     const userAnswer = 'yes';

//     const userAnserIsCorrect = isCorrect(userAnswer);
//     assert.equal(userAnserIsCorrect, true);
// });
    
// test('should return false if the user says no', function(assert) {
//     const userAnswer = 'no';
//     const userAnswerIsCorrect = isCorrect(userAnswer);
//     assert.equal(userAnswerIsCorrect, false);
// });
import isYes from '../src/isYes.js';
const test = QUnit.test;

test('returns true', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const answer = 'yes';
    const expected = true;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = isYes(answer);
    //Assert
    assert.equal(result, expected);
});
test('returns false', function(assert) {
    const answer = 'no';
    const expected = false;
    const result = isYes(answer);
    assert.equal(result, expected);
});
