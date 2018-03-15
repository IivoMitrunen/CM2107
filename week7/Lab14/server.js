var params = {screen_name: 'nodejs'};
var express = require('express');
var app = express();
var Twitter = require('twitter');
var client = new Twitter({
 consumer_key: 'YrvgnucqTgZNvjVx6o9DJGuq1',
 consumer_secret: 'DShKgNOjaWQg7QxZHgzt6fcz3Wk12LPIdEK5agjPV6shIoaozG',
 access_token_key: '802550256902819840-qhXjmn3TH3pDzpsgIWcBCIbQ12oU5H9',
 access_token_secret: 'dubHwb1UBn1g1NbXGrjfbuqEMTghmJn9LmUNgG62IcMLp'
});
app.use(express.static('public'))
app.get('/'
, function(req, res){
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
 if (!error) {
 res.send(tweets);
 }
});

 res.send("Hello world! by express");
});

app.listen(8080);
