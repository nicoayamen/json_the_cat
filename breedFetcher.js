const request = require('request');

const fetchBreedDescription = function(breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      // Call the callback with the error and null description
      callback(error, null);
    } else if (response && response.statusCode !== 200) {
      // Call the callback with unexpected status code error and null description
      callback(`Unexpected status code: ${response.statusCode}. Body: ${body}`, null);
    } else {
      try {
        const data = JSON.parse(body);
        if (data.length === 0) {
          // Call the callback with breed not found error and null description
          callback("Breed not found!", null);
        } else {
          // Call the callback with null error and the description from body
          callback(null, data[0].description);
        }
      } catch (e) {
        // Call the callback with parsing error and null description
        callback(`Failed to parse response body: ${e.message}`, null);
      }
    }
  });
};

module.exports = {
  fetchBreedDescription,
};