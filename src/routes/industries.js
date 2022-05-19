const router = require("express").Router()
const industriesRoutes  = require('../controllers/industries');

router.post("/logistics", industriesRoutes?.logistics);
router.post("/retail",industriesRoutes.retail)

module.exports = router; 


