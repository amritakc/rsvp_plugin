var mongoose = require('mongoose');
var Schema = mongoose.Schema

var UserSchema = new mongoose.Schema({ 
  email: [String],
  name: String,
  eventName: [String],
  events: [{event:String,count:Number}],
});

// var UserSchema = new mongoose.Schema({ 
//   email: [String],
//   name: String,
//   events: [{sangeetk: {event:String, attending:Boolean,count:Number}}, {sangeetr: {event:String, attending:Boolean,count:Number}}, {wedding: {event:String, attending:Boolean,count:Number}}, {reception: {event:String, attending:Boolean,count:Number}}, {kirtan: {event:String, attending:Boolean,count:Number}}],
// });

mongoose.model('User', UserSchema);