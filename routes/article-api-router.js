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












module.exports = router;