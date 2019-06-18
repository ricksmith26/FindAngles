const relative = require("../index.js");

const radians = relative.radians;
const degrees = relative.degrees;
const rad = relative.rad;
const deg = relative.deg;

describe("relative-angle", () => {
	it("function aliases should point to the same functions", () => {
		expect(radians).toEqual(rad);
		expect(degrees).toEqual(deg);
	});

	it("degrees should return the same as radians multiplied by 180/PI", () => {
		const anchor = {
			x: 142,
			y: 84
		};

		const target = {
			x: 712,
			y: -664
		};

		expect(degrees(anchor, target)).toEqual(radians(anchor, target) * (180 / Math.PI));
	});

	it("should correctly calculate angles", () => {
		const anchor = {
			x: 300,
			y: 12
		};

		const target = {
			x: 300,
			y: 50
		};

		expect(degrees(anchor, target)).toEqual(90);
	});
});

const pointOne = {
	x: 612,
	y: 314
}

const pointTwo = {
	x: 1128,
	y: 851
}

console.log(degrees(pointOne, pointTwo));
console.log(radians(pointOne, pointTwo));