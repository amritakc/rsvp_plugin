var mongoose = require('mongoose');
var Schema = mongoose.Schema
var uniqueValidator = require('mongoose-unique-validator')

var UserSchema = new mongoose.Schema({ 
  email: [String],
  name: String,
  eventName: [{e:String, invited:{type:Number,requred:true, default:0}}],
  events: [{event:{type:String,requred:true} ,count:{type:Number,requred:true}}],
});

// var UserSchema = new mongoose.Schema({ 
//   email: [String],
//   name: String,
//   events: [{sangeetk: {event:String, attending:Boolean,count:Number}}, {sangeetr: {event:String, attending:Boolean,count:Number}}, {wedding: {event:String, attending:Boolean,count:Number}}, {reception: {event:String, attending:Boolean,count:Number}}, {kirtan: {event:String, attending:Boolean,count:Number}}],
// });
UserSchema.plugin(uniqueValidator);
mongoose.model('User', UserSchema);