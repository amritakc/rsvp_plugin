var mongoose = require('mongoose');
var Schema = mongoose.Schema
var uniqueValidator = require('mongoose-unique-validator')

var UserSchema = new mongoose.Schema({ 
  email: [String],
  name: String,
  eventName: [{e:String, invited:{type:Number,requred:true, default:0}}],
  events: [{event:{type:String,requred:true} ,count:{type:Number,requred:true}}],
  attending:[{will_attend:{type:Boolean, default:true},comment:String}],
});

UserSchema.plugin(uniqueValidator);
mongoose.model('User', UserSchema);