var users = require('./../controllers/users.js')

module.exports = function(app){

	app.post('/userinfo', function(req,res){
		users.show(req,res)
	})	

};