const request = require('request');
const fs = require('fs');

// const request = require('request');
// request('http://www.google.com', (error, response, body) => {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });

// const fs = require('fs');

// const content = 'Some content!';

// fs.writeFile('/Users/joe/test.txt', content, err => {
//   if (err) {
//     console.error(err);
//   }
//   // file written successfully
// });

const URL = process.argv[2];
const localFilePath = process.argv[3];

request(URL, (error, response, body) => {
  if (error) {
    console.log('error:', error);
    return;
  }
    
  fs.writeFile(localFilePath, body, (error) => {
    if (error) {
      console.log('error', error);
    } else {
    // Content-Length - number of bytes of data in body of request/response
    // can replace response.headers["content-length"] with body.length
      console.log(`Downloaded and saved ${response.headers["content-length"]} bytes to ${localFilePath}`);
    }
  });
});

