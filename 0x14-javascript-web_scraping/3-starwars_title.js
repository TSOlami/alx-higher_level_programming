#!/usr/bin/node
const movieID = process.argv[2];
const request =require('request');
const url = 'https://swapi-api.alx-tools.com/api/https://swapi-api.alx-tools.com/api/https://swapi-api.alx-tools.com/api/films/${movieID}';

request.get(url, (error, response, body) => {
	if (error) {
		console.log(error);
	} else {
		const jsondata = JSON.parse(body);
		console.log(jsondata.title);
	}
});