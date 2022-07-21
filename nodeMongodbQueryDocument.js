var mongodb = require('mongodb');
var MongoClient = require('mongodb').MongoClient, assert = require('assert');

// Use connect method to connect to the server

MongoClient.connect('mongodb://0.0.0.0:27017', function(err, client) {
        if (err) throw err;

        var db = client.db('test');

// creating collection
var collection = db.collection('students');

// Query student
collection.find({name:'Adam'}).toArray(function (queryErr, result) {
        if (queryErr) throw err;
        else if (result.length){
        console.log('Found', result);
        }
	else {
	console.log('No documents found!!!');
	}	
        // closing the connection
        client.close();
  });
});
