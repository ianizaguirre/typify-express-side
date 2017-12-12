"use strict";
require("dotenv").config();

require("../config/mongoose-setup");

const Phone = require("../models/user-model");




const userList = [
	{
		fullName: 'Morpheus',
		username: 'Red Pill'
	},
	{
		fullName: 'Thomas A. Anderson',
		username: 'Neo'
	}
];

Phone.create(userList)
	.then((results) => {
		console.log(` ${results.length} user created `);
	})
	.catch((err) => {
		console.log('Save ERROR!');
		console.log(err);
	});