"use strict";
require("dotenv").config();

require("../config/mongoose-setup");

const Article = require("../models/article-model");



const articleList = [


	{
		title: 'Title of Article1',

		lines: 
		[

		'As hardware technology has advanced, so too has the need for sophisticated software applications to run not just on one kind of device but on an array of devices.',


		'JavaScript is the natural solution to this cross-platform model since almost all modern browsers are capable of running it.',


		'Unfortunately, creating large applications in JavaScript can be difficult, especially when it comes to structuring the code in a maintainable way.',

		'TypeScript, an open source language project created by Microsoft, aims to take JavaScript development to the next level.',

		'TypeScript is just a superset of JavaScript that gets compiled into plain JavaScript. This means that anything you can do with ES5, you can do in ES6. And everything you can do with ES6, you can also use in TypeScript'

		],


		image: 'https://codecraft.tv/assets/images/courses/angular/1.quickstart/venn-es5-es6-typescript.png'
	}


];




Article.create(articleList)
	.then((results) => {
		console.log(` ${results.length} article created `);
	})
	.catch((err) => {
		console.log('Save ERROR!');
		console.log(err);
	});