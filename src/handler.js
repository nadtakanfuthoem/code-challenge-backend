const helper = require("./helper")

module.exports.display = async event => {

	const data = await helper.loadData()
	const statusCode = 200;
	if(!data) {
		statusCode = 500;
	}

	return {
		statusCode: statusCode,
		body: data,
		headers: {
			"Access-Control-Allow-Origin": "*",
			"content-type": "application/json"
		}
	}
}
