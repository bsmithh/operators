// import code to be tested
var symbols = require("../index");

describe("A program to demonstrate the concept of symbols", () => {

	it("can perform addition", () => {
		var x = 10;
		var y = 5;
		expect(symbols.addition(x, y)).toBe(15);
	});

	it("can perform substraction", () => {
		var x = 10;
		var y = 5;
		expect(symbols.subtraction(x, y)).toBe(5);
	});

	it("can perform division", () => {
		var x = 10;
		var y = 5;
		expect(symbols.division(x, y)).toBe(2)
	});

	it("can report the remainder", () => {
		var x = 39
		var y = 4
		expect(symbols.modulus(x, y)).toBe(3)
	});

	it("can perform complex mathematical operations", () => {
		var x = 20
		var y = 50
		var z = 3.5
		var a = 4
		expect(symbols.math(x, y, z, a)).toBe(10)
		expect(Math.sqrt(a)).toBe(2)
	})
});