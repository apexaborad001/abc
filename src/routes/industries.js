const router = require("express").Router()
const industriesRoutes  = require('../controllers/industries');

router.post("/logistics", industriesRoutes?.logistics);
router.post("/retail",industriesRoutes.retail)
router.post("/energyAndUtility",industriesRoutes.energyAndUtility)
router.post("/goverment",industriesRoutes.goverment)
router.post("/professionalServices",industriesRoutes.professionalServices)
router.post("/trading",industriesRoutes.trading)
router.post("/equipmentRentalServices",industriesRoutes.equipmentRentalServices)
router.post("/healthcare",industriesRoutes.healthcare)
router.post("/facilityManagement",industriesRoutes.facilityManagement)
router.post("/mining",industriesRoutes.mining)
router.post("/services",industriesRoutes.services)
router.post("/microsoftViva",industriesRoutes.microsoftViva)



module.exports = router; 


