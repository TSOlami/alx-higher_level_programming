#!/usr/bin/node
const movieId = process.argv[2];
const url = `https://swapi.dev/api/films/${movieId}/`;
const request = require('request');
let character = [];

request.get(url, (error, response, body) => {
	if (error){
		console.log(error);
		return;
	}
	const jsonData = JSON.parse(body);
	characters = jsonData.characters;
	getCharacters(0);
});

const getCharacters = (index) => {
	if (index === characters.length) {
		return;
	}

	request(characters[index], (error, response, body) => {
		if (error) {
		  console.log(error);
		  return;
		}
		const characterData = JSON.parse(body);
    	console.log(characterData.name);
    	getCharacters(index + 1);
	});
};