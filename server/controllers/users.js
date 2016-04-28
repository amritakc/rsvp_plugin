var mongoose = require('mongoose');
var User = mongoose.model('User');


module.exports = (function() {
 return {
      show: function(req,res){
        var message 
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
         User.findOne({email:req.body.email}, function(err,doc){
          if(err){
            console.log("Something went wrong")
          }
          else{
            console.log("Updating RSVP status!")
            console.log(req.body)
            // if(req.body.num.sangeetk!=undefined){
            //   doc.events.push({event:"sangeetk", count:req.body.num.sangeetk})
            // }
            // if(req.body.num.sangeetr!=undefined){
            //   doc.events.push({event:"sangeetr", count:req.body.num.sangeetr})
            // }
            // if(req.body.num.wedding!=undefined){
            //   doc.events.push({event:"wedding", count:req.body.num.wedding})
            // }
            // if(req.body.num.reception!=undefined){
            //   doc.events.push({event:"reception", count:req.body.num.reception})
            // }
            // if(req.body.num.kirtan!=undefined){
            //   doc.events.push({event:"kirtan", count:req.body.num.kirtan})
            // }            
            // console.log(doc.events)
            // doc.save()
            res.json(doc)
          }
      })
    },
        notattending: function(req,res){
            console.log('in not attneding')
            console.log(req.body.email)
            User.findOne({email:req.body.email}, function(err,doc){
              if(req.body.comment!=undefined){
                  doc.attending.push({will_attend:false, comment:req.body.comment})
              } else {
                doc.attending.push({will_attend:false})
              }
              doc.save()
              res.json(doc)

      })
    },
}
})();