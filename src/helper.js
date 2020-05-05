const fs = require("fs")
let json;

// load json file
async function loadData(){
	if(!json) {
		json = fs.readFileSync("data/data.json", "utf-8")
	}
	return json
}

module.exports = {
	loadData
}