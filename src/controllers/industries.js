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
			const conversationData = req?.body?.conversationData;
            conversationData.previousIntentName = "agent.logistics";
            if(conversationData.previousIntentName==="agent.readMore")conversationData.userDetails.urlToBeEmailed = "https://online24x7.net/Industries/Logistics"
			responseObject = integrator.conditionCreater(integrator.conditionCreater("Default response"));
			let result = integrator.responseCreater(responseObject, conversationData);
			res.status(result.statusCode).json(result);
		}catch (error) {
			const conversationData = req?.body?.conversationData;
			let result = integrator.responseCreater(integrator.conditionCreater("Default response"), conversationData);
			res.status(result.statusCode).json(result);
		}
	},
	retail: async (req, res) => {
		try {
			const conversationData = req?.body?.conversationData;
            conversationData.previousIntentName = "agent.retail";
            if(conversationData.previousIntentName==="agent.readMore")conversationData.userDetails.urlToBeEmailed = "https://online24x7.net/Industries/Retail"
			responseObject = integrator.conditionCreater(integrator.conditionCreater("Default response"));
			let result = integrator.responseCreater(responseObject, conversationData);
			res.status(result.statusCode).json(result);
		}catch (error) {
			const conversationData = req?.body?.conversationData;
			let result = integrator.responseCreater(integrator.conditionCreater("Default response"), conversationData);
			res.status(result.statusCode).json(result);
		}
	},
	energyAndUtility:async (req, res) => {
		try {
			const conversationData = req?.body?.conversationData;
            conversationData.previousIntentName = "agent.energyAndUtilityl";
            if(conversationData.previousIntentName==="agent.readMore")conversationData.userDetails.urlToBeEmailed = "https://online24x7.net/Industries/Energy-and-Utility"
			responseObject = integrator.conditionCreater(integrator.conditionCreater("Default response"));
			let result = integrator.responseCreater(responseObject, conversationData);
			res.status(result.statusCode).json(result);
		}catch (error) {
			const conversationData = req?.body?.conversationData;
			let result = integrator.responseCreater(integrator.conditionCreater("Default response"), conversationData);
			res.status(result.statusCode).json(result);
		}
	},
	goverment:async (req, res) => {
		try {
			const conversationData = req?.body?.conversationData;
            conversationData.previousIntentName = "agent.goverment";
            if(conversationData.previousIntentName==="agent.readMore")conversationData.userDetails.urlToBeEmailed = "https://online24x7.net/Industries/Government"
			responseObject = integrator.conditionCreater(integrator.conditionCreater("Default response"));
			let result = integrator.responseCreater(responseObject, conversationData);
			res.status(result.statusCode).json(result);
		}catch (error) {
			const conversationData = req?.body?.conversationData;
			let result = integrator.responseCreater(integrator.conditionCreater("Default response"), conversationData);
			res.status(result.statusCode).json(result);
		}
	},
	professionalServices:async (req, res) => {
		try {
			const conversationData = req?.body?.conversationData;
            conversationData.previousIntentName = "agent.professionalServices";
            if(conversationData.previousIntentName==="agent.readMore")conversationData.userDetails.urlToBeEmailed = "https://online24x7.net/Industries/Government"
			responseObject = integrator.conditionCreater(integrator.conditionCreater("Default response"));
			let result = integrator.responseCreater(responseObject, conversationData);
			res.status(result.statusCode).json(result);
		}catch (error) {
			const conversationData = req?.body?.conversationData;
			let result = integrator.responseCreater(integrator.conditionCreater("Default response"), conversationData);
			res.status(result.statusCode).json(result);
		}
	},
	trading:async (req, res) => {
		try {
			const conversationData = req?.body?.conversationData;
            conversationData.previousIntentName = "agent.Trading";
            if(conversationData.previousIntentName==="agent.readMore")conversationData.userDetails.urlToBeEmailed = "https://online24x7.net/Industries/Government"
			responseObject = integrator.conditionCreater(integrator.conditionCreater("Default response"));
			let result = integrator.responseCreater(responseObject, conversationData);
			res.status(result.statusCode).json(result);
		}catch (error) {
			const conversationData = req?.body?.conversationData;
			let result = integrator.responseCreater(integrator.conditionCreater("Default response"), conversationData);
			res.status(result.statusCode).json(result);
		}
	},
	equipmentRentalServices:async (req, res) => {
		try {
			const conversationData = req?.body?.conversationData;
            conversationData.previousIntentName = "agent.equipmentRentalsServices";
            if(conversationData.previousIntentName==="agent.readMore")conversationData.userDetails.urlToBeEmailed = "https://online24x7.net/Industries/Equipment-Rental-Services"
			responseObject = integrator.conditionCreater(integrator.conditionCreater("Default response"));
			let result = integrator.responseCreater(responseObject, conversationData);
			res.status(result.statusCode).json(result);
		}catch (error) {
			const conversationData = req?.body?.conversationData;
			let result = integrator.responseCreater(integrator.conditionCreater("Default response"), conversationData);
			res.status(result.statusCode).json(result);
		}
	},
	healthcare:async (req, res) => {
		try {
			const conversationData = req?.body?.conversationData;
            conversationData.previousIntentName = "agent.healthcare";
            if(conversationData.previousIntentName==="agent.readMore")conversationData.userDetails.urlToBeEmailed ="https://online24x7.net/Industries/Healthcare" 
			responseObject = integrator.conditionCreater(integrator.conditionCreater("Default response"));
			let result = integrator.responseCreater(responseObject, conversationData);
			res.status(result.statusCode).json(result);
		}catch (error) {
			const conversationData = req?.body?.conversationData;
			let result = integrator.responseCreater(integrator.conditionCreater("Default response"), conversationData);
			res.status(result.statusCode).json(result);
		}
	},

}

module.exports = generalQueryController;
