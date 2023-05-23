#!/usr/bin/node
const movieId = process.argv[2];
const url = `https://swapi.dev/api/films/${movieId}/`;
const request = require('request');

request.get(url, (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }
  const jsonData = JSON.parse(body);
  const characters = jsonData.character;
  for (const character of characters) {
    request(character, (error, response, body) => {
      if (error) {
        console.log(error);
        return;
      }
      const characterJsonData = JSON.parse(body);
      console.log(characterJsonData.name);
    });
  }
});
