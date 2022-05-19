const router = require("express").Router()
const industriesRoutes  = require('../controllers/industries');

router.post("/logistics", industriesRoutes?.logistics);
router.post("/retail",industriesRoutes.retail)
router.post("/energyAndUtility",industriesRoutes.energyAndUtility)
router.post("/goverment",industriesRoutes.goverment)
router.post("/trading",industriesRoutes.trading)
module.exports = router; 


