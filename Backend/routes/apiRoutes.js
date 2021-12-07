let { Router } = require('express');
let apiController = require('../controllers/apiController');

const router = Router();

router.get('/test-route', apiController.test);

module.exports = router;
