
var mongodb = require('mongodb');
var MongoClient = require('mongodb').MongoClient, assert = require('assert');

// Use connect method to connect to the server

MongoClient.connect('mongodb://0.0.0.0:27017', function(err, client) {
        if (err) throw err;

        var db = client.db('test');

// creating collection
var collection = db.collection('students');

// Delete documents
collection.remove({name:'Bertan'},function (deleteErr, result) {
        if (deleteErr) throw err;
        else {
        console.log('Deleted');
        }

        // closing the connection
        client.close();
   });
});
