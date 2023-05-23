#!/usr/bin/node
const movieId = process.argv[2];
const request = require('request');
const url = 'https://swapi-api.alx-tools.com/api/films/' + movieId;

request.get(url, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    const jsonData = JSON.parse(body);
    console.log(jsonData.title);
  }
});
