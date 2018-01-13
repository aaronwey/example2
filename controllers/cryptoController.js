const db = require("../models");
const axios = require("axios");
const cheerio = require("cheerio");

module.exports = {
	findAll: function(req, res) {
		db.Crypto
			.find(req.query)
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.status(422).json(err));
	},

	create: function(req, res){
		db.Crypto
			.create(req.body)
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.status(422).json(err));
	},

	remove: function(req, res) {
		db.Crypto
			.findById({ _id: req.params.id })
			.then((dbModel) => dbModel.remove())
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.status(422).json(err));
	},

	travel: function(req, res){
		 axios.get("https://wowair.us/").then(function(response) {
    // Then, we load that into cheerio and save it to $ for a shorthand selector
    var $ = cheerio.load(response.data);
    // Now, we grab every h2 within an article tag, and do the following:
    $("a.secure").each(function(i, element) {
      // Save an empty result object
      var result = {};
      // Add the text and href of every link, and save them as properties of the result object
      result.title = $(this)
        .children(".date")
        .text();
      result.from = $(this)
      	.children(".destination")
      	.children(".from")
      	.text();
      result.to = $(this)
      	.children(".destination")
      	.children(".to")
      	.text();
      result.price = parseInt($(this)
      	.children(".priceblock")
      	.children("em")
      	.children(".price")
      	.text());
      result.link = $(this)
        .attr("href");
      // Create a new Article using the `result` object built from scraping
      db.Article
        .create(result)
        .then(function(dbArticle) {
          // If we were able to successfully scrape and save an Article, send a message to the client
          res.json("Scrape Complete");
        })
        .catch(function(err) {
          // If an error occurred, send it to the client
          res.json(err);
        });
    });
  });
  },

  display:  function(req, res) {
  // Grab every document in the Articles collection
  db.Article
    .find({})
    .then(function(dbArticle) {
      // If we were able to successfully find Articles, send them back to the client
      res.json(dbArticle);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
}




	
	
};