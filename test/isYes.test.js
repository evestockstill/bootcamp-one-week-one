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
// test('returns true', function(assert) {
//     const answer = 'YES';
//     const expected = true;
//     const result = isYes(answer);
//     assert.equal(result, expected);
// });
// test('returns true', function(assert) {
//     const answer = 'y';
//     const expected = true;
//     const result = isYes(answer);
//     assert.equal(result, expected);
// });
// test('returns true', function(assert) {
//     const answer = 'Y';
//     const expected = true;
//     const result = isYes(answer);
//     assert.equal(result, expected);
// });
// test('returns false', function(assert) {
//     const answer = 'No';
//     const expected = false;
//     const result = isYes(answer);
//     assert.equal(result, expected);
// });
// test('returns false', function(assert) {
//     const answer = 'n';
//     const expected = false;
//     const result = isYes(answer);
//     assert.equal(result, expected);
// });
// test('returns false', function(assert) {
//     const answer = 'N';
//     const expected = false;
//     const result = isYes(answer);
//     assert.equal(result, expected);
// });
