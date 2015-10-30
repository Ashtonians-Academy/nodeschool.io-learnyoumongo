var mongo = require('mongodb').MongoClient;
var parsedInput = parseInt(process.argv[2]);
var results;

mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db){
    results = db.collection('parrots').find({ age: { $gt: parsedInput } } ).toArray(function(err, doc) 
    {
        if(doc) 
        {
            console.log(doc);
        }
        else{
            console.log(err);
        }
    });
    db.close();
});