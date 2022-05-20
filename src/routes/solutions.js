const router = require("express").Router()
const solutionsRoutees  = require('../controllers/solutions');

router.post("/sales", solutionsRoutees?.sales);
router.post("/financeAndOperations",solutionsRoutees.financeAndOperations)
router.post("/marketing",solutionsRoutees.marketing)
router.post("/businessCentral",solutionsRoutees.businessCentral)
router.post("/dynamic365Customization",solutionsRoutees.dynamic365Customization)
router.post("/dynamics365ConsultingServices",solutionsRoutees.dynamics365ConsultingServices)
router.post("/dynamics365Commerce",solutionsRoutees.dynamics365Commerce)
router.post("/dynamics365CommerceCapabilities",solutionsRoutees.dynamics365CommerceCapabilities)
router.post("/fieldServices",solutionsRoutees.fieldServices)
router.post("/customServices",solutionsRoutees.customServices)
router.post("/projectServiceAutomation",solutionsRoutees.projectServiceAutomation)
router.post("/dynamics365Support",solutionsRoutees.dynamics365Support)
router.post("/dynamics365Implementation",solutionsRoutees.dynamics365Implementation)
router.post("/customerRelationshipManagement",solutionsRoutees.customerRelationshipManagement)
router.post("/dynamics365ConnectedStore",solutionsRoutees.dynamics365ConnectedStore)



module.exports = router; 


