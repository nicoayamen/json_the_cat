const request = require('request');

const arg = process.argv.slice(2);
const breed = arg[0];

request('https://api.thecatapi.com/v1/breeds/search?q=sib', (error, response, body) => {
  console.log('error: ', error);
  console.log('Status Code: ', response && response.statusCode);
  console.log('Body: ', body);
  console.log(typeof body);

  const data = JSON.parse(body);
  console.log(data);
  console.log(typeof data);
  console.log("!!!",data[0].description);

});