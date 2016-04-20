var mongoose = require('mongoose');
var Schema = mongoose.Schema

var UserSchema = new mongoose.Schema({ 
  email: [String],
  name: String,
  events: [{eventName:String,attending:Boolean,count:Number}],
  created_at: {type: Date, default: new Date}
});

mongoose.model('test', UserSchema);