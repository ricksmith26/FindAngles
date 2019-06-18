# relative-angle

Calculate the angle between two sets of XY coordinates. Useful for getting the angle of the mouse from a particular object on screen, for example.

```javascript

const getDegrees = require("@schwingbat/relative-angle").degrees;
const getRadians = require("@schwingbat/relative-angle").radians;

const pointOne = {
	x: 612,
	y: 314
}

const pointTwo = {
	x: 1128,
	y: 851
}

console.log(getDegrees(pointOne, pointTwo)); // 46.14249942304433 degrees
console.log(getRadians(pointOne, pointTwo)); // 0.8053385400317074 radians

```