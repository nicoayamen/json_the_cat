const request = require('request');

const arg = process.argv.slice(2);
const breed = arg[0];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  console.log('Status Code: ', response && response.statusCode);
  
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log("Breed not found!");;
  } else {
    console.log(data[0].description);
  }



});