// index.js
export function add(a, b) {
    return a + b;
}

const myObject = { name: 'John', age: 30 };
myObject['stream'] = 'test';
export default myObject;
export const newobj = { ...myObject, hobby: 'reading' };
export const testFunction = (params) => {
    if (params === 1) {
        return true;
    } else {
        throw new Error('Error');
    }
}
export const testcall = (callback) => {
    setTimeout(() => {
        callback('penut Butter Jelly Time');
    }, 1000)


};