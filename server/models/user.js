var mongoose = require('mongoose');
var Schema = mongoose.Schema

var UserSchema = new mongoose.Schema({ 
  email: [String],
  name: String,
  events: [{sangeetk: {attending:Boolean,count:Number}}, {sangeetr: {attending:Boolean,count:Number}}, {wedding: {attending:Boolean,count:Number}}, {reception: {attending:Boolean,count:Number}}, {kirtan: {attending:Boolean,count:Number}}],
});

mongoose.model('User', UserSchema);