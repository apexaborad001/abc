const router = require("express").Router()
const industriesRoutes  = require('../controllers/industries');

router.post("/logistics", industriesRoutes?.logistics);

module.exports = router; 


