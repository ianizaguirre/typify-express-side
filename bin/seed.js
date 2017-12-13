"use strict";
require("dotenv").config();

require("../config/mongoose-setup");

const Annotation = require("../models/annotation-model");



const annotationList = [

	{
		name: 'Morpheus',
		content: [
		'Unibrow Design',
		'Unlocks with Your Face',
		'Tons of Screen Space'
		],
		dateAdded: new Date()
	},


	{
		name: 'Thomas A. Anderson',
		content: [
		'Plastic Design',
		'Domino Design',
		'Ads For Days'
		],
		dateAdded: new Date()
	}

];




Annotation.create(annotationList)
	.then((results) => {
		console.log(` ${results.length} annotation created `);
	})
	.catch((err) => {
		console.log('Save ERROR!');
		console.log(err);
	});