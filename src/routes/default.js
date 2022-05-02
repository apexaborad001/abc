const router = require("express").Router()
const { defaultFallBack }  = require('../controllers/default');

router.post("/default", defaultFallBack);

module.exports = router; 


