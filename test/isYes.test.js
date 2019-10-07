import isYes from '../src/isYes.js';
const test = QUnit.test;

test('returns true', function(assert) {
    const answer = 'yes';
    const expected = true;
    const result = isYes(answer);
    assert.equal(result, expected);
});
test('returns false', function(assert) {
    const answer = 'no';
    const expected = false;
    const result = isYes(answer);
    assert.equal(result, expected);
});
