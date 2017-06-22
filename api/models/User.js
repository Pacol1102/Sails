/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

const bcrypt = require('bcrypt'); 
 
module.exports = {

  attributes: {
	nombre:{
		type: 'string',
		required: true,
	},
	password:{
		type: 'string',
		required: true,
	},
	edad:{
		type: 'integer',
		required: true,
		defaultsTo: 5,
	},
	amigo: {
		collection:'user',
		via: 'id',  
	},
	saluda: () => {
		console.log('hola');
	},
	
  },
  beforeCreate: (values, cb) => {
	  bcrypt.hash(values.password, 10, (err, hash) => {
		  if(err){
			  return cb (err);
		  }
		  values.password = hash;
		  return cb(null, values);
	  });
  },
  saluda: () => {
	  console.log('adios');
  },
};

