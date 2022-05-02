const router = require("express").Router()
const { emailAndPhone }  = require('../controllers/general');

router.post("/emailandPhone", emailAndPhone);

module.exports = router; 


