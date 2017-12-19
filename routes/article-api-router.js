"use strict";
const express = require("express");

const Article = require("../models/article-model");

const router = express.Router();




router.get("/articles", (req, res, next) => {
	Article
			.find()
			.limit(25)
			.exec()
			.then((articleResults) => {
				// respond with the query results in the JSON format
				res.status(200).json(articleResults);
			})
			.catch((err) => {
				console.log('GET /articles ERROR');
				console.log(err);

				// respond with an error message in the JSON format
				res.status(500).json({ error: "Article list database error" });
			});
}); // GET /articles








router.get("/articles/:id", (req, res, next) => {


	Article.findById(req.params.id)
		.then((articleFromDb) => {

			// 404 if article does not exist on a postman delete
			if (articleFromDb === null) {
				// respond with an ERROR MESSAGE in the Json format
				res.status(404).json({ error: "Article not found" });
			}

			// respond with the QUERY RESULTS in the JSON format
			res.status(200).json(articleFromDb);
		})
		.catch((err) => {
			console.log('GET /articles/:id ERROR! ');
			console.log(err);

			// respond with an Error Message in the JSON format
			res.status(500).json({ error: "Article details database error" });
		});
}); // GET /articles/:id









module.exports = router;