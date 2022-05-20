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
	
	sales: async (req, res) => {
		try {
			const conversationData = req?.body?.conversationData;
            conversationData.previousIntentName = "agent.solution.sales";
            if(conversationData.previousIntentName==="agent.readMore")conversationData.userDetails.urlToBeEmailed = "https://online24x7.net/Solutions/Dynamics365/Sales"
			responseObject = integrator.conditionCreater(integrator.conditionCreater("Default response"));
			let result = integrator.responseCreater(responseObject, conversationData);
			res.status(result.statusCode).json(result);
		}catch (error) {
			const conversationData = req?.body?.conversationData;
			let result = integrator.responseCreater(integrator.conditionCreater("Default response"), conversationData);
			res.status(result.statusCode).json(result);
		}
	},
	financeAndOperations: async (req, res) => {
		try {
			const conversationData = req?.body?.conversationData;
            conversationData.previousIntentName = "agent.solution.financeAndOperation";
            if(conversationData.previousIntentName==="agent.readMore")conversationData.userDetails.urlToBeEmailed = "https://online24x7.net/Solutions/Dynamics365/Finance-Operations"
			responseObject = integrator.conditionCreater(integrator.conditionCreater("Default response"));
			let result = integrator.responseCreater(responseObject, conversationData);
			res.status(result.statusCode).json(result);
		}catch (error) {
			const conversationData = req?.body?.conversationData;
			let result = integrator.responseCreater(integrator.conditionCreater("Default response"), conversationData);
			res.status(result.statusCode).json(result);
		}
	},
	marketing:async (req, res) => {
		try {
			const conversationData = req?.body?.conversationData;
            conversationData.previousIntentName = "agent.solution.marketing";
            if(conversationData.previousIntentName==="agent.readMore")conversationData.userDetails.urlToBeEmailed = "https://online24x7.net/Solutions/Dynamics365/Marketing"
			responseObject = integrator.conditionCreater(integrator.conditionCreater("Default response"));
			let result = integrator.responseCreater(responseObject, conversationData);
			res.status(result.statusCode).json(result);
		}catch (error) {
			const conversationData = req?.body?.conversationData;
			let result = integrator.responseCreater(integrator.conditionCreater("Default response"), conversationData);
			res.status(result.statusCode).json(result);
		}
	},
	businessCentral:async (req, res) => {
		try {
			const conversationData = req?.body?.conversationData;
            conversationData.previousIntentName = "agent.solution.businessCentral";
            if(conversationData.previousIntentName==="agent.readMore")conversationData.userDetails.urlToBeEmailed = "https://online24x7.net/Solutions/Dynamics365/Business-Central"
			responseObject = integrator.conditionCreater(integrator.conditionCreater("Default response"));
			let result = integrator.responseCreater(responseObject, conversationData);
			res.status(result.statusCode).json(result);
		}catch (error) {
			const conversationData = req?.body?.conversationData;
			let result = integrator.responseCreater(integrator.conditionCreater("Default response"), conversationData);
			res.status(result.statusCode).json(result);
		}
	},
	dynamic365Customization:async (req, res) => {
		try {
			const conversationData = req?.body?.conversationData;
            conversationData.previousIntentName = "agent.solution.dynamics365Customization";
            if(conversationData.previousIntentName==="agent.readMore")conversationData.userDetails.urlToBeEmailed = "https://online24x7.net/Solutions/Dynamics365/Dynamics365-Customization"
			responseObject = integrator.conditionCreater(integrator.conditionCreater("Default response"));
			let result = integrator.responseCreater(responseObject, conversationData);
			res.status(result.statusCode).json(result);
		}catch (error) {
			const conversationData = req?.body?.conversationData;
			let result = integrator.responseCreater(integrator.conditionCreater("Default response"), conversationData);
			res.status(result.statusCode).json(result);
		}
	},
	dynamics365ConsultingServices:async (req, res) => {
		try {
			const conversationData = req?.body?.conversationData;
            conversationData.previousIntentName = "agent.solution.dynamics365ConsultingServices";
            if(conversationData.previousIntentName==="agent.readMore")conversationData.userDetails.urlToBeEmailed = "https://online24x7.net/Solutions/Dynamics365/Dynamics365-Consulting-Services"
			responseObject = integrator.conditionCreater(integrator.conditionCreater("Default response"));
			let result = integrator.responseCreater(responseObject, conversationData);
			res.status(result.statusCode).json(result);
		}catch (error) {
			const conversationData = req?.body?.conversationData;
			let result = integrator.responseCreater(integrator.conditionCreater("Default response"), conversationData);
			res.status(result.statusCode).json(result);
		}
	},
	dynamics365Commerce:async (req, res) => {
		try {
			const conversationData = req?.body?.conversationData;
            conversationData.previousIntentName = "agent.solution.commerce";
            if(conversationData.previousIntentName==="agent.readMore")conversationData.userDetails.urlToBeEmailed = "https://online24x7.net/Solutions/Dynamics365/dynamics365-commerce"
			responseObject = integrator.conditionCreater(integrator.conditionCreater("Default response"));
			let result = integrator.responseCreater(responseObject, conversationData);
			res.status(result.statusCode).json(result);
		}catch (error) {
			const conversationData = req?.body?.conversationData;
			let result = integrator.responseCreater(integrator.conditionCreater("Default response"), conversationData);
			res.status(result.statusCode).json(result);
		}
	},
	dynamics365CommerceCapabilities:async (req, res) => {
		try {
			const conversationData = req?.body?.conversationData;
            conversationData.previousIntentName = "agent.solution.dynamics365commerceCapabilities";
            if(conversationData.previousIntentName==="agent.readMore")conversationData.userDetails.urlToBeEmailed ="https://online24x7.net/Solutions/Dynamics365/dynamics365-capabilities" 
			responseObject = integrator.conditionCreater(integrator.conditionCreater("Default response"));
			let result = integrator.responseCreater(responseObject, conversationData);
			res.status(result.statusCode).json(result);
		}catch (error) {
			const conversationData = req?.body?.conversationData;
			let result = integrator.responseCreater(integrator.conditionCreater("Default response"), conversationData);
			res.status(result.statusCode).json(result);
		}
	},
	fieldServices:async (req, res) => {
		try {
			const conversationData = req?.body?.conversationData;
            conversationData.previousIntentName = "agent.solution.fieldService";
            if(conversationData.previousIntentName==="agent.readMore")conversationData.userDetails.urlToBeEmailed ="https://online24x7.net/Solutions/Dynamics365/Field-Service" 
			responseObject = integrator.conditionCreater(integrator.conditionCreater("Default response"));
			let result = integrator.responseCreater(responseObject, conversationData);
			res.status(result.statusCode).json(result);
		}catch (error) {
			const conversationData = req?.body?.conversationData;
			let result = integrator.responseCreater(integrator.conditionCreater("Default response"), conversationData);
			res.status(result.statusCode).json(result);
		}
	},
	customServices:async (req, res) => {
		try {
			const conversationData = req?.body?.conversationData;
            conversationData.previousIntentName = "agent.solution.customerService";
            if(conversationData.previousIntentName==="agent.readMore")conversationData.userDetails.urlToBeEmailed ="https://online24x7.net/Solutions/Dynamics365/Customer-Service" 
			responseObject = integrator.conditionCreater(integrator.conditionCreater("Default response"));
			let result = integrator.responseCreater(responseObject, conversationData);
			res.status(result.statusCode).json(result);
		}catch (error) {
			const conversationData = req?.body?.conversationData;
			let result = integrator.responseCreater(integrator.conditionCreater("Default response"), conversationData);
			res.status(result.statusCode).json(result);
		}
	},
	projectServiceAutomation:async (req, res) => {
		try {
			const conversationData = req?.body?.conversationData;
            conversationData.previousIntentName = "agent.solution.projectServicesAutomation";
            if(conversationData.previousIntentName==="agent.readMore")conversationData.userDetails.urlToBeEmailed ="https://online24x7.net/Solutions/Dynamics365/Project-Service-Automation" 
			responseObject = integrator.conditionCreater(integrator.conditionCreater("Default response"));
			let result = integrator.responseCreater(responseObject, conversationData);
			res.status(result.statusCode).json(result);
		}catch (error) {
			const conversationData = req?.body?.conversationData;
			let result = integrator.responseCreater(integrator.conditionCreater("Default response"), conversationData);
			res.status(result.statusCode).json(result);
		}
	},
	dynamics365Support:async (req, res) => {
		try {
			const conversationData = req?.body?.conversationData;
            conversationData.previousIntentName = "agent.solution.dynamics365Supports";
            if(conversationData.previousIntentName==="agent.readMore")conversationData.userDetails.urlToBeEmailed ="https://online24x7.net/Solutions/Dynamics365/Dynamics-365-Support" 
			responseObject = integrator.conditionCreater(integrator.conditionCreater("Default response"));
			let result = integrator.responseCreater(responseObject, conversationData);
			res.status(result.statusCode).json(result);
		}catch (error) {
			const conversationData = req?.body?.conversationData;
			let result = integrator.responseCreater(integrator.conditionCreater("Default response"), conversationData);
			res.status(result.statusCode).json(result);
		}
	},
    dynamics365Implementation:async (req, res) => {
		try {
			const conversationData = req?.body?.conversationData;
            conversationData.previousIntentName = "agent.solution.dynamics365Implementation";
            if(conversationData.previousIntentName==="agent.readMore")conversationData.userDetails.urlToBeEmailed ="https://online24x7.net/Solutions/Dynamics365/Dynamics365-Implementation" 
			responseObject = integrator.conditionCreater(integrator.conditionCreater("Default response"));
			let result = integrator.responseCreater(responseObject, conversationData);
			res.status(result.statusCode).json(result);
		}catch (error) {
			const conversationData = req?.body?.conversationData;
			let result = integrator.responseCreater(integrator.conditionCreater("Default response"), conversationData);
			res.status(result.statusCode).json(result);
		}
	},
	customerRelationshipManagement:async (req, res) => {
		try {
			const conversationData = req?.body?.conversationData;
            conversationData.previousIntentName = "agent.solution.customerRelationshipManagement";
            if(conversationData.previousIntentName==="agent.readMore")conversationData.userDetails.urlToBeEmailed ="https://online24x7.net/Solutions/Dynamics365/Customer-Relationship-Management-Service" 
			responseObject = integrator.conditionCreater(integrator.conditionCreater("Default response"));
			let result = integrator.responseCreater(responseObject, conversationData);
			res.status(result.statusCode).json(result);
		}catch (error) {
			const conversationData = req?.body?.conversationData;
			let result = integrator.responseCreater(integrator.conditionCreater("Default response"), conversationData);
			res.status(result.statusCode).json(result);
		}
	},
	dynamics365ConnectedStore:async (req, res) => {
		try {
			const conversationData = req?.body?.conversationData;
            conversationData.previousIntentName = "agent.solution.dynamics365ConnectedStore";
            if(conversationData.previousIntentName==="agent.readMore")conversationData.userDetails.urlToBeEmailed ="https://online24x7.net/Solutions/Dynamics365/dynamics-365-connected-store" 
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
