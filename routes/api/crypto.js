const router = require("express").Router();
const cryptoController = require("../../controllers/cryptoController");

// Matches with "/api/crypto"
router.route('/')
	.get(cryptoController.findAll)
	.post(cryptoController.create);

// Matches with "/api/crypto/:id"
router.route('/:id')
	.delete(cryptoController.remove);

router.route('/hi')
	.get(cryptoController.travel);

router.route('/display')
	.get(cryptoController.display);

module.exports = router;