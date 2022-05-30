
/*****Node js Axios */

var axios = require("axios").default;

var options1 = {
  method: 'POST',
  url: 'https://url-shortener-service.p.rapidapi.com/shorten',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'x-rapidapi-host': 'url-shortener-service.p.rapidapi.com',
    'x-rapidapi-key': '6e56d7cab9msh7847da76d4ddcd4p167790jsn0798822d14df'
  },
  data: {url: 'https://nmp-video-player.herokuapp.com/'}
};

axios.request(options1).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

/****Node Js Require */

const request = require('request');

const options2 = {
  method: 'POST',
  url: 'https://url-shortener-service.p.rapidapi.com/shorten',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'x-rapidapi-host': 'url-shortener-service.p.rapidapi.com',
    'x-rapidapi-key': '6e56d7cab9msh7847da76d4ddcd4p167790jsn0798822d14df',
    useQueryString: true
  },
  form: {url: ' https://nmp-video-player.herokuapp.com/'}
};

request(options2, function (error, response, body) {
	if (error) throw new Error(error);

	console.log(body);
});