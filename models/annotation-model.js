"use strict";
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const annotationSchema = new Schema (
	{
		// Owner ID of a specfic annotation owner selected
		userId: {
		    type: Schema.Types.ObjectId,
		    // required: true,
		    ref: 'User'
		},

		// Name of person annotating 
		name: {
			type: String,
			required: [true, 'Name is required']
		},

		// Article Content that will be parsed 
		content: [ 
							 { type: String }
						 ],


		// Date when the annotation was added to the system
		dateAdded: { type: Date }

	},

	{
		timestamps: { createdAt: "created_at", 
									updatedAt: "updated_at" 
								}
	}
);

const Annotation = mongoose.model("Annotation", annotationSchema);

module.exports = Annotation;