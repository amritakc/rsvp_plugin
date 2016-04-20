var mongoose = require('mongoose');
var Schema = mongoose.Schema

var UserSchema = new mongoose.Schema({ 
  email: [String],
  name: String,
  events: [{eventName:String,attending:Boolean,count:Number}],
});

// var UserSchema = new mongoose.Schema({ 
//   email: String,
//   events: [
//   	{
//   	event1: String,
//   	event2: String,
//   	event3:{type: String},
//   	event4:{type: String},
//   	event5:{type: String},
//   	event1_a:{type: Boolean},
//   	event2_a:{type: Boolean},
//   	event3_a:{type: Boolean},
//   	event4_a:{type: Boolean},
//   	event5_a:{type: Boolean},
//   	event1_n:{type: Number},
//   	event2_n:{type: Number},
//   	event3_n:{type: Number},
//   	event4_n:{type: Number},
//   	event5_n:{type: Number},
//   }
//   ],
//   created_at: {type: Date, default: new Date}
// });

mongoose.model('User', UserSchema);