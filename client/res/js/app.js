//N4 main js
// console.log("App start")

var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/nodetest1');
var collection = db.get('usercollection');
console.log(db);
collection.find({},{},function(e,docs){
  console.log(docs);
});
