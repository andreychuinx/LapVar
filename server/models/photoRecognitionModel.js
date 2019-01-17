const Clarifai = require('clarifai');
const app = new Clarifai.App({
 apiKey: 'd702ef684da9483c9a6c6bdc115568d3'
});

const predict = (link, callback) => {
	app.models.initModel({id: 'd702ef684da9483c9a6c6bdc115568d3', version: "aa7f35c01e0642fda5cf400f543e7c40"})
		.then(generalModel => {
			return generalModel.predict(link)
		})
		.then(response => {
			callback(null, response)
		})
		
}

module.exports = {predict}