var data = require("../data.json");

exports.addFriend = function(req, res) {    
	// Your code goes here
	var name = req.query.name;
	var des = req.query.description;
	console.log(name + " " + des);
	var newFriend = {
						"name": name,
						"description": des,
						"imageURL": "http://lorempixel.com/400/400/people"
					}
	data["friends"].push(newFriend);
	res.render('add');
 }