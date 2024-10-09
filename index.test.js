// index.test.js
import { add, newobj, testFunction, testcall } from "./index";
import myObject from "./index";

test('should add two numbers', () => {
    expect(add(1, 2)).toBe(3);
});

test('should return myObject', () => {
    expect(myObject).toEqual({ name: 'John', age: 30, stream: 'test' });
});
test('should False', () => {
    const n = 1;
    expect(n).toBeTruthy();

});
test('should give error', () => {
    expect(() => testFunction(2)).toThrowError('Error');
})

test('should call callback', done => {

    function callback(data) {
        try {

            expect(data).toBe('penut Butter Jelly Time');
            done();
        }
        catch (error) {
            done(error);
        }
    }
    testcall(callback);
});



