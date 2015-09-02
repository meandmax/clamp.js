import test from 'tape';
import clamp from '../index';

test('clamp() is a function and returns a function', function (t) {
    t.plan(2);

    t.equal(typeof clamp, 'function');
    t.equal(typeof clamp(10, 20), 'function');
});

test('returns the input in range min..max', function (t) {
    const limiter = clamp(10, 20);

    t.plan(3);

    t.equal(limiter(10), 10);
    t.equal(limiter(15), 15);
    t.equal(limiter(20), 20);
});

test('returns the maximum for values greater than the maximum', function (t) {
    const limiter = clamp(10, 20);

    t.plan(3);

    t.equal(limiter(21), 20);
    t.equal(limiter(200), 20);
    t.equal(limiter(10000), 20);
});

test('returns the minimum for values less than the minimum', function (t) {
    const limiter = clamp(10, 20);

    t.plan(3);

    t.equal(limiter(21), 20);
    t.equal(limiter(200), 20);
    t.equal(limiter(10000), 20);
});

test('works if minimum and maximum are swapped', function (t) {
    const limiter = clamp(10, 20);

    t.plan(3);

    t.equal(limiter(21), 20);
    t.equal(limiter(200), 20);
    t.equal(limiter(10000), 20);
});

test('works if minimum and maximum are swapped', function (t) {
    const limiter = clamp(20, 10);

    t.plan(5);

    t.equal(limiter(0), 10);
    t.equal(limiter(10), 10);
    t.equal(limiter(15), 15);
    t.equal(limiter(20), 20);
    t.equal(limiter(30), 20);
});

test('works if only maximum is supplied', function (t) {
    const limiter = clamp(20);

    t.plan(8);

    t.equal(limiter(30), 20);
    t.equal(limiter(20), 20);
    t.equal(limiter(19), 19);
    t.equal(limiter(10), 10);
    t.equal(limiter(1), 1);
    t.equal(limiter(0), 0);
    t.equal(limiter(-1), 0);
    t.equal(limiter(-10), 0);
});

test('works in negative ranges', function (t) {
    const limiter = clamp(-10, -20);

    t.plan(5);

    t.equal(limiter(-20), -20);
    t.equal(limiter(-10), -10);
    t.equal(limiter(-9), -10);
    t.equal(limiter(-21), -20);
    t.equal(limiter(21), -10);
});
