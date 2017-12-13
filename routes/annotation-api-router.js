// "use strict";
// const express = require("express");

// const Annotation = require("../models/annotation-model");

// const router = express.Router();




// router.get("/annotations", (req, res, next) => {
// 	Annotation
// 					.find()
// 					.limit(25)
// 					.exec()
// 					.then((annotationResults) => {
// 						// respond with the query results in the JSON format
// 						res.status(200).json(annotationResults);
// 					})
// 					.catch((err) => {
// 						console.log('GET /annotations ERROR');
// 						console.log(err);

// 						// respond with an error message in the JSON format
// 						res.status(500).json({ error: "Annotation list database error" });
// 					});
// }); // GET /annotations





// router.post("/annotations", (req, res, next) => {
// 	const theAnnotation = new Annotation ({
// 		// brand: req.body.brand,
// 		// name: req.body.name,
// 		// image: req.body.image,
// 		// specs: req.body.specs
// 	});

// 	theAnnotation.save()
// 		.then(() => {
// 			res.status(200).json(theAnnotation);
// 		})
// 		.catch((err) => {
// 			console.log('POST /annotations ERROR');
// 			console.log(err);

// 			// 400 status code if validation error
// 			if (err.errors) {
// 				res.status(400).json(err.errors);
// 			}
// 			else {
// 				// respond with an Error Message in the JSON format
// 				res.status(500).json({ error: "annotation save database error" });
// 			}
// 		}); 
// }); // POST /annotations







// // router.get("/phones/:id", (req, res, next) => {
// // 	if ( req.user === undefined ) {
// // 		res.status(400).json({ error: "Not Logged In" });
// // 		return;
// // 	}

// // 	Phone.findById(req.params.id)
// // 		.then((phoneFromDb) => {

// // 			// 404 if phone does not exist on a postman delete
// // 			if (phoneFromDb === null) {
// // 				// respond with an ERROR MESSAGE in the Json format
// // 				res.status(404).json({ error: "Phone not found" });
// // 			}

// // 			// respond with the QUERY RESULTS in the JSON format
// // 			res.status(200).json(phoneFromDb);
// // 		})
// // 		.catch((err) => {
// // 			console.log('GET /phones/:id ERROR! ');
// // 			console.log(err);

// // 			// respond with an Error Message in the JSON format
// // 			res.status(500).json({ error: "Phone details database error" });
// // 		});
// // }); // GET /phones/:id





// // router.delete("/phones/:id", (req, res, next) => {
// // 	if ( req.user === undefined ) {
// // 		res.status(400).json({ error: "Not Logged In" });
// // 		return;
// // 	}

// // 	Phone.findByIdAndRemove(req.params.id)
// // 		.then((phoneFromDb) => {

// // 			// 404 if phone does not exist on a postman delete
// // 			if (phoneFromDb === null) {
// // 				// respond with an ERROR MESSAGE in the Json format
// // 				res.status(404).json({ error: "Phone not found" });
// // 			}

// // 			// respond with the QUERY RESULTS in the JSON Format
// // 			res.status(200).json(phoneFromDb);
// // 		})
// // 		.catch((err) => {
// // 			console.log("Delete /phones/id: ERROR!");
// // 			console.log(err);

// // 			// respond with an ERROR Message in JSON Format
// // 			res.status(500).json({ error: "Phone delete database error" });
// // 		});
// // }); // DELETE /phones/:id








// // router.put("/phones/:id", (req, res, next) => {
// // 	Phone.findById(req.params.id) 
// // 		.then((phoneFromDb) => {

// // /*
// // 			// 404 if phone does not exist on a postman delete
// // 			if (phoneFromDb === null) {
// // 				// respond with an ERROR MESSAGE in the Json format
// // 				res.status(404).json({ error: "Phone not found" });
// // 			}
// // */
// // 			phoneFromDb.set({
// // 				brand: req.body.brand,
// // 				name: req.body.name,
// // 				image: req.body.image, 
// // 				specs: req.body.specs 
// // 			});
// // 			return phoneFromDb.save();
// // 		})
// // 		.then((phoneFromDb) => {
// // 			// respond with the QUERY RESULTS in the JSON format
// // 			res.status(200).json(phoneFromDb);
// // 		})
// // 		.catch((err) => {
// // 			console.log("PUT /phones/:id ERROR!");
// // 			console.log(err);
// // 			if (err.errors) {
// // 				res.status(400).json(err.errors);
// // 			}
// // 			else {
// // 			// respond with an ERROR MESSAGE in the JSON format
// // 			res.status(500).json({ error: "Phone update database error" });
// // 			}
// // 		});
// // }); // PUT /phones/:id














// module.exports = router;