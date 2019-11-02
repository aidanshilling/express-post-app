const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

var friends = [ 'Tony', 'Niraj', 'Andrew', 'Ryleigh', 'Stuart', 'Tammy' ];

app.get('/', function(req, res) {
	res.render('home');
});

app.post('/addfriend', function(req, res) {
	var newFriend = req.body.newfriend;
	friends.push(newFriend);
	res.redirect('/friends');
});

app.get('/friends', function(req, res) {
	res.render('friends', { friends: friends });
});

app.listen(3000, () => {
	console.log('Listening on port 3000');
});
