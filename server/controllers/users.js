var mongoose = require('mongoose');
var User = mongoose.model('User');


module.exports = (function() {
 return {
      show: function(req,res){
        var message 
        User.findOne({email:req.body.email}, function(err,results){
          if(results === null){
            message = "Email not found"
            // console.log("email not found")
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
            // console.log("Updating RSVP status!")
            console.log("req.body")
            console.log(req.body)
            console.log("doc")
            console.log(doc)
            for(var key in req.body.count_attending){
              // console.log("in for loop")
              // doc.events.key.push({count_attending:req.body.count_attending.key})
              // console.log(doc.events)
              for(var event in doc.events){
                // console.log(event)
              }
               // for(var key in doc.events){
               //    console.log(key, "key in inner for loop")
               //  }
               // console.log(doc.events,"!!doc.events[0]!!")
               // console.log(doc.events[0].event, "!!event!!")
               // console.log(key, "!!key!!")
              }
            // console.log("after for loop")
            // console.log(doc)          
            // console.log(doc.events[1])
            var z = doc.events.length
            // console.log("z: ", z)
            for(var i = 0; i<z; i++){
              // console.log(doc.events[i].event)
              for(var key in req.body.count_attending){
                // console.log(key)
                // console.log(doc.events[i].event)
                if(key === doc.events[i].event){
                  console.log(doc.events[i].count_attending)
                  console.log(req.body.key)


                }
              }
            }
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