const request = require('request');

const arg = process.argv.slice(2);
const breed = arg[0];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {

  // checks to see error, depending on server or unexpected status code, good for if url is broken or typo'd
  if (error) {
    console.error("Error: ", error);
  }
  else if (response && response.statusCode != 200) {
    console.log(`Unexpected status code: ${response.statusCode}. Body: ${body}`);
  }

  else {
    try {
      // to not pass error into data
      const data = JSON.parse(body);
      // if data array is empty
      if (data.length === 0) {
        console.log("Breed not found!");
      }
      // if CL arg is a breed, return the description
      else {
        console.log(data[0].description);
      }
    }
    // catch case error if all else fails with JSON.parse so it can fail gracefully. Thanks larry
    catch (e) {
      console.error("Failed to parse response body: ", e.message);
    }
  }
  
});