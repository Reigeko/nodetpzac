const express = require('express')
const app = express()
const request = require("request");
const PORT = process.env.PORT || 5000 // this is very important

const options = { method: 'GET',
  url: 'https://nodetpbd-4f62.restdb.io/rest/account',
  headers:
   { 'cache-control': 'no-cache',
     'x-apikey': '1f974012daf1e196860fa4fab287595516513' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

app.get('/', function (req, res) {
  res.send('Hello World!'),
})

app.listen(PORT, function () {
  console.log('Example app listening on port ' + PORT)
})
// dsfsdf
