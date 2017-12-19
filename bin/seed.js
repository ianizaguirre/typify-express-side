"use strict";
require("dotenv").config();

require("../config/mongoose-setup");

const Article = require("../models/article-model");



const articleList = [


	{
		title: 'Is var Dead? What should I use?',

		intro: 'We’ve learned about let and const — what they do, and how they’re scoped. We also know when they can be reassigned and when they cannot, but there’s a question: What Should I actually use?',

		lines: 
		[

		'We’ve learned about let and const — what they do, and how they’re scoped. We also know when they can be reassigned and when they cannot, but there’s a question: What Should I actually use?',


		'That’s a bit of a hot topic in the community right now, because some people prefer to still use var.',


		'Some people are saying, “var is dead!” Some say, “Use let.” while others always use const.',

		'var isn’t dead – it still does what it always has done — it’s function scoped and you can reassign or re-bind it.',

		'You may very well continue to choose it.'

		],


		image: 'http://wesbos.com/wp-content/uploads/2016/09/var-dead.png'
	},




	{
		title: 'An Intro to Template Strings',

		intro: 'Most other programming languages have the ability to just drop your variables right inside of a string and interpolate it, but until now JavaScript hasn’t had this.',

		lines: 
		[

		'Most other programming languages have the ability to just drop your variables right inside of a string and interpolate it, but until now JavaScript hasn’t had this.',


		'What ends up happening is you forget one of your closing quotes, and you get an error and it tells you it’s on line 3. You say “Of course it’s on line 3, but I don’t know where it is!”',


		'We can fix all of that with what’s called template strings, or template literals in ES6.',

		'In JavaScript we have double quotes and single quotes to make a string.',

		'Now we have a third way to make a string, and that is with back-ticks, which I’ve been using in most of my examples so far.'

		],


		image: 'https://i.ytimg.com/vi/IEf1KAcK6A8/maxresdefault.jpg'
	},





	{
		title: 'When Not to use an Arrow Function',

		intro: 'Before you start going absolutely bananas on using arrow functions everywhere, we need to chat.',

		lines: 
		[

		'Before you start going absolutely bananas on using arrow functions everywhere, we need to chat.',


		'Arrow functions don’t replace regular functions.',


		'Just like Flexbox and floats, pixels and rems and anything else new that comes along, the older thing still retains lots of utility because it works differently than the new thing.',

		'We talked about the benefits of ES6 Arrow Functions in earlier videos and blog posts but let’s go through a couple examples of when you probably don’t want an arrow function. ',

		'All of these are just going to boil down to not having the keyword this, but they are also different use cases that you’d run into.'

		],


		image: 'https://techonria.files.wordpress.com/2016/07/arrow.png?w=785'
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