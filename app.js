var express = require('express')
var Twit = require('twit')
var bodyParser = require('body-parser')
var app = express();

app.set('view enginge', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }));

var T = new Twit({
    consumer_key: '',
    consumer_secret: '',
    access_token: '',
    access_token_secret: ''
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

