// import code to be tested
var Symbols = require("../index");
var x = 10;
var y = 5;
var z = Number(x) + Number(y); // 15

describe("A program to demonstrate the concept of symbols", () => {

	it("can perform addition", () => {
		expect("10 + 5")
		.toBe(15);
	});
});