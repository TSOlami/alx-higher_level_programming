#!/usr/bin/node

const url = process.argv[2];
const request = require('request');

let count = 0
request.get(url, (error, response, body) => {
	if (error) { console.log(error); }
	else {
		const jsondata = JSON.parse(body);
		jsondata.results.forEach((film) => {
			film.characters.forEach((character) => {
				if (character.includes(18)) {
					count += 1;
				}
			});
		});
		console.log(count);
	}
});