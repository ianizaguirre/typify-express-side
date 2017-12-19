"use strict";
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const articleSchema = new Schema (
	{

		userId: {
		    type: Schema.Types.ObjectId,
		    // required: true,
		    ref: 'User' 
		},

		title: {
			type: String
			// required: [true, 'Name is required']
		},

		intro: {
			type: String
		},

		// Article Content that will be parsed 
		lines: [ 
							 { type: String }
					 ],

		image: {
			type: String
		},

	},


	{

		timestamps: { createdAt: "created_at", 
									updatedAt: "updated_at" 
								}
								
	}


);






const Article = mongoose.model("Article", articleSchema);

module.exports = Article;