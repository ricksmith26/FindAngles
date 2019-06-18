const getDegrees = require("@schwingbat/relative-angle").degrees;
const getRadians = require("@schwingbat/relative-angle").radians;
// const fs = require('fs');
const fs = require('mz/fs');

const data = async () => await fs.readFile('./data.json').then(contents => {
    let result = [];
    let arr = JSON.parse(contents);
    for (let i = 0; i < arr.length-1; i++) {
        const pointOne = {x: arr[i].position.x, y: arr[i].position.y};
        const pointTwo = {x: arr[i + 1].position.x, y: arr[i + 1].position.y};
        result.push(getDegrees(pointOne, pointTwo))
    }
    return result;
}).catch(console.log)

data().then((data) => {
    console.log(data)
});

