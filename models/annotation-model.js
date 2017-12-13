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


		// "Content" is the users annotation comment
		content: [ 
							 { type: String }
						 ]

	},

	{

		timestamps: { createdAt: "created_at", 
									updatedAt: "updated_at" 
								}

	}

);



const Annotation = mongoose.model("Annotation", annotationSchema);

module.exports = Annotation;