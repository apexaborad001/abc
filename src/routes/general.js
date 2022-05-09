const router = require("express").Router()
const generalRoutes  = require('../controllers/general');

router.post("/emailandPhone", generalRoutes?.emailAndPhone);
router.post("/skip", generalRoutes?.skip);

module.exports = router; 


