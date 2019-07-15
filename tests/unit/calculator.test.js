'use strict';

const test = require('ava');
const { Calculator } = require('../../src/calculator');


test('sum operation', t => {
    const result = new Calculator(1)
        .plus(1)
        .equals();

    t.is(result, 2);
});

test('subtraction operation', t => {
    const result = new Calculator(7)
        .minus(1)
        .equals();

    t.is(result, 6);
});

test('division operation', t => {
    const result = new Calculator(9)
        .divided(3)
        .equals();

    t.is(result, 3);
});

test('multiplication operation', t => {
    const result = new Calculator(4)
        .times(4)
        .equals();

    t.is(result, 16);
});

test('complex operation', t => {
    const result = new Calculator(10)
        .plus(1)
        .times(2)
        .minus(2)
        .divided(4)
        .equals();

    t.is(result, 5);
});
