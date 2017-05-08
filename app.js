var express = require('express')
var Twit = require('twit')
var bodyParser = require('body-parser')
var app = express();

app.set('view enginge', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }));

var T = new Twit({
    consumer_key: 'cNWMkWAcLNP1qi4yy3JpoXDZU',
    consumer_secret: '3f4NNkbAzqnZxm7mdJMyMIJo93M6NiToTOVNjrsBH2AzsNybDR',
    access_token: '848367436109799424-ZMsGaZshJQc0QqKoqyUudIU7eDlpeQR',
    access_token_secret: 'aLNAf7LoVfCDQZpn2e7yF6YaPXQEjFb2WDvXarwhMHanA'
})

app.get('/', function(req, res){
    res.render('index.ejs')
})
app.post('/tweet', function(req, res){
    res.render('index.ejs')
    parsedData = req.body.tweetName;
    T.post('statuses/update', { status: parsedData }, function(err, data, response) {
        if(err){
            console.log(err)
        }
        else{
            console.log(parsedData)
        }
    })
})

app.listen(3000, 'localhost', function(){
    console.log('Server has started')
})

