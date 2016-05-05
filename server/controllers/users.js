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
        query = req.body.query
        data = req.body.data
        console.log(query)
        console.log(data)
        User.update(query,data,{ upsert: true},function(test,err){
          console.log(test)
          console.log(err)
          if(err)
            res.send(err)
          else{
            res.json(test)
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