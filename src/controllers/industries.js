const integrator = require("is-integration-provider");
const { verifyValidEmail, checkValidPhoneNumber, validateBusinessEmail } = require("../utils/verifier");
const {
	mailComposer,
	mailComposeForSalesTeam,
	mailComposerForLink,
	mailComposerForGeneral,
	mailComposerForTechExcellence,
	mailComposerForIndustries,
} = require("../utils/mailComposer");
const { sendMail } = require("../utils/mailer");
const { slotFiller } = require("../utils/slotFiller");
const { allSlots } = require("./contactUs");
const { leadGenaratedLogs } = require("../utils/logger.js");
// const { technologiesExcellence, innovationLabs, urlsForIndustries, digitalCounsulting } = require("./solutions");
const { slotData } = require("../utils/supporter");
 
let generalQueryController = {
	
	logistics: async (req, res) => {
		try {
            conversationData.previousIntentName = "agent.logistics";
			const conversationData = req?.body?.conversationData;
			responseObject = integrator.conditionCreater(integrator.conditionCreater("Default response"));
			let result = integrator.responseCreater(responseObject, conversationData);
			res.status(result.statusCode).json(result);
		} catch (error) {
			const conversationData = req?.body?.conversationData;
			let result = integrator.responseCreater(integrator.conditionCreater("Default response"), conversationData);
			res.status(result.statusCode).json(result);
		}
	}


}

module.exports = generalQueryController;
