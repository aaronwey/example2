const router = require("express").Router();
const cryptoRoutes = require("./crypto");
const scraperRoutes = require("./scraper");

router.use('/crypto', cryptoRoutes);
// router.use('/scraper', scraperRoutes);

module.exports = router;