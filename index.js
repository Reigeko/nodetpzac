const express = require('express')
const app = express()
// const request = require("request");
const PORT = process.env.PORT || 5000 // this is very important

const axios = require('axios').create({
  url: 'https://nodetpbd-4f62.restdb.io/rest',
  headers:
   { 'cache-control': 'no-cache',
     'x-apikey': '1f974012daf1e196860fa4fab287595516513' }
   });


app.get('/', async function (req, res) {
  res.send(await getAccount())
})

async function getAccount() {
  return await axios.get('/account').then((resultat)=>{return resultat.data})
}

app.get('/', async function (req, res) {
  res.send('Hello World!')
})

app.listen(PORT, function () {
  console.log('Example app listening on port ' + PORT)
})
// dsfsdf
