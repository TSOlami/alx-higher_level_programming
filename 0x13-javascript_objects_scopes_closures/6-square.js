#!/usr/bin/node

// a class Square that defines a square and inherits from Square of 5-square.js
// Create an instance method called charPrint(c) that prints the rectangle using the character c


module.exports = class Square extends require('./5-square.js') {
	charPrint (c) {
		if (c === undefined){
			this.print();
		} else {
			for (let i = 0; i < this.height; i++) console.log(c.repeat(this.width))
		}
	}
};
