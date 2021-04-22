var path = require('path')
const express = require('express')
const cors = require('cors')
const fetch = require("node-fetch");
const dotenv = require('dotenv')
dotenv.config();

const baseUrl = 'https://api.meaningcloud.com/sentiment-2.1?key=' 

const app = express()

app.use(express.static('dist'))
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(cors())

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

app.post('/test', async (req, res) => {
    urlEntry = req.body.url;
    const response = await fetch(baseUrl+'547181febf21378c65bfe8e79f560dd9&of=json&txt&model=general&lang=en&url='+urlEntry)
    console.log('server response: ', response)
    const data = await response.json();
    console.log('server side: ', data)
    const projectData = {
        score_tag : data.score_tag,
        confidence : data.confidence,
        irony : data.irony,
        subjectivity : data.subjectivity,
        agreement : data.agreement,
   }
    res.send(projectData)
    console.log(projectData)
})

// designates what port the app will listen to for incoming requests
const server = app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

module.exports = server 
