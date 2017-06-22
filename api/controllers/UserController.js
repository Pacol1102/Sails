/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 const waterfall = require('async/waterfall');

/*function addUser(err,req, cbwf){
	User.create({
			nombre: req.body.nombre,
			password: req.body.password,
			edad: req.body.edad,
		}).exec(cbwf);
};*/
 
function createUsers(req, res){
	/*waterfall([
		(cbwf) => {addUser(null, req, cbwf)}
	])*/
	console.log("Hola");
	User.create({
		nombre: req.body.nombre,
		password: req.body.password,
		edad: req.body.edad,
	}).exec((err,user) => {
		if(err){
			return res.status(500).send('Error');
		}
		return res.status(201).send("entre al controlador");
	});
	
} 
 
 /*function readUsers(req, res){
	return User.find()
		.then((foundUsers) => {
			res.status(200).json(foundUsers);
		})
		.catch((err) =>{
			res.status(500).send("Algo ocurrio");
		});
 }*/
 
module.exports = {
	createUsers,
	
};

