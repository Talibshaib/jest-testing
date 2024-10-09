# Jest

[Jest](https://jestjs.io/) is a delightful JavaScript Testing Framework with a focus on simplicity. It works with projects using Babel, TypeScript, Node.js, React, Angular, Vue.js, and more.

## Installation

To install Jest, run:

```bash
npm install --save-dev jest
```

Or with Yarn:

```bash
yarn add --dev jest
```

## Usage

To run tests with Jest, add a script to your `package.json`:

```json
{
    "scripts": {
        "test": "jest"
    }
}
```

Then, you can run your tests with:

```bash
npm test
```

## Writing Tests

Create a file named `sum.js`:

```javascript
function sum(a, b) {
    return a + b;
}
module.exports = sum;
```

Then, create a file named `sum.test.js`:

```javascript
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});
```

Run the tests:

```bash
npm test
```

## Documentation

For more information, visit the [Jest documentation](https://jestjs.io/docs/en/getting-started).

## License

This project is licensed under the MIT License.