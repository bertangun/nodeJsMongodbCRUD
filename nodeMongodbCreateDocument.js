var MongoClient = require('mongodb').MongoClient, assert = require('assert');
// connect the url
var url ='mongodb://0.0.0.0:27017';

MongoClient.connect(url,function(err, client) {
        assert.equal(null,err);
        console.log("Connected to Mongodb server");

	var db = client.db('test');

// creating collection
var collection = db.collection('students');

// creating student documents to be inserted
var std1 = {name: 'John', standard: 10, subjects: ['Physics', 'Chemistry', 'Maths']};
var std2 = {name: 'Bertan', standard: 11, subjects: ['Biology', 'Chemistry']};
var std3 = {name: 'Sally', standard: 12, subjects: ['Science', 'Commerce', 'Maths']};

// insert document
collection.insert([std1, std2, std3], function (err, result) {
	if (err) {
		console.log(err);
	} else {
		console.log("Document inserted", result.length, result);
	}

	// closing the connection
	client.close();
  });
});
