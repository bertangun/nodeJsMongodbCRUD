var mongodb = require('mongodb');
var MongoClient = require('mongodb').MongoClient, assert = require('assert');

// Use connect method to connect to the server

MongoClient.connect('mongodb://0.0.0.0:27017', function(err, client) {
	if (err) throw err;

	var db = client.db('test');
        
// creating collection
var collection = db.collection('students');

// Update student 
collection.update({name:'John'}, {$set: {subjects:['Math','History','Biology']}}, function (updateErr, numUpdated) {
	if (updateErr) throw err;
	console.log(numUpdated);

        // closing the connection
        client.close();
  });
});
