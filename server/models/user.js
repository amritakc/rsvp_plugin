var mongoose = require('mongoose');
var Schema = mongoose.Schema

var UserSchema = new mongoose.Schema({ 
  email: String,
  created_at: {type: Date, default: new Date}
});

mongoose.model('User', UserSchema);