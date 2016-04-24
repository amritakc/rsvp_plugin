var users = require('./../controllers/users.js')

module.exports = function(app){

	app.post('/userinfo', function(req,res){
		users.show(req,res)
	})	
	app.post('/updatersvp', function(req,res){
		users.update(req,res)
	})
	app.post('/notattending', function(req,res){
		users.notattending(req,res)
	})		
};