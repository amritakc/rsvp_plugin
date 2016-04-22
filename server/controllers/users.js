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
        console.log(req.body.num.sangeet)
        console.log(req.body.email)
        // if(req.body.num.wedding===undefined){
          // console.log("wedding:false")
        // }

         User.findOne({email:req.body.email}, function(err,doc){
          if(err){
            console.log("Something went wrong")
          }
          else{
            console.log("Updating RSVP status!")
            if(req.body.num.sangeet!=undefined){
              doc.events.push({event:"sangeetk", count:req.body.num.sangeet})
            }
            if(req.body.num.sangeet!=undefined){
              doc.events.push({event:"sangeetr", count:req.body.num.sangeet})
            }
            if(req.body.num.wedding!=undefined){
              doc.events.push({event:"wedding", count:req.body.num.wedding})
            }
            if(req.body.num.reception!=undefined){
              doc.events.push({event:"reception", count:req.body.num.reception})
            }
            if(req.body.num.kirtan!=undefined){
              doc.events.push({event:"kirtan", count:req.body.num.kirtan})
            }            
            console.log(doc.events)
            doc.save()
            res.json(doc)
          }
    })
    //     User.update({email:req.body.email}, {$set: {"events.$.sangeetk": {count:1}}}, function(err,results){
    //       if(err){
    //         console.log("Something went wrong")
    //       }
    //       else{
    //         console.log("Updated RSVP status!")
    //         res.json(results)
    //       }
    // })
  },
 }
})();