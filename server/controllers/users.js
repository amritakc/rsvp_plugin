var mongoose = require('mongoose');
var User = mongoose.model('User');


module.exports = (function() {
 return {
      show: function(req,res){
        var message 
        // console.log("in show method")
        // console.log(req.body)
        // console.log(req.body.email)
        User.findOne({email:req.body.email}, function(err,results){
          if(results === null){
            message = "Email not found"
            console.log("email not found")
            res.json(message)
          }
          else{
            console.log("Found email!")
            res.json(results)
          }
    })
  },
      update: function(req,res){
        console.log('in update users controller')
        console.log(req.body)
        User.findOne({email:req.body.email}, function(err,results){
          if(results === null){
            message = "Email not found"
            console.log("email not found")
            res.json(message)
          }
          else{
            console.log("Found email!")
            res.json(results)
          }
    })
  },
 }
})();