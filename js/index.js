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
var sqrt = function(a) {
	return Math.sqrt(a);
}
var problem = function(x, y, z, a) {
	return (x + y) / (z * (sqrt(a)));
}

module.exports = {
	addition: addition,
	subtraction: subtraction,
	division: division,
	modulus: modulus,
	sqrt: sqrt, 
	problem: problem
};
