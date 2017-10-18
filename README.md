# promisfy

## description

this package is used for transform a node-style asynchronous function to a promise-style function. It's very handy if you are using async/await.

a node-style asynchronous function should be like this:

```javascript
function asycFunction(arg1, arg2, callback) {
    // do something
}

// callback should be like this
function callback(err, result) {
    // do something
}
```

The first argument `err` represents whether the asynchronous call is failed(`null` while it's successful), and the second argument is the result of this call.

## install

```shell
npm install --save promisfy
```

## usage

very simple to use:

```javascript
const fs = require('fs');
const promisfy = require('promisfy');

const readFile = promisfy(fs.readFile);

async function main() {
    let content = await readFile('myfile.txt', {encoding:'utf8'});

    return content;
}

main().then(function(content) {
    console.log('myfile:');
    console.log(content);
})

```
