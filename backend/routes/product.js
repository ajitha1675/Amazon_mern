const express = require('express')
const router = express.Router();

router.route('/products').get(getProducts);

module.exports = router;