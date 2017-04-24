var addition = function(x, y) {
	return x + y;
}
var subtraction = function(x, y) {
	return x - y;
}
var division = function(x, y) {
	return x / y;
}
var modulus = function(x, y) {
	return x % y;
}
var Math.sqrt = function(a) {
	return Math.sqrt(a);
}
var math = function(x, y, z, a) {
	return (x + y) / (z * (Math.sqrt(a));
}

module.exports = {
	addition: addition,
	subtraction: subtraction,
	division: division,
	modulus: modulus,
	Math.sqrt: Math.sqrt, 
	math: math
};