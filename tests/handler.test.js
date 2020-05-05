'use strict'

const handler = require('../src/handler')
const helper = require('../src/helper')

// load json object
const data = helper.loadData();

describe('Display', () => {
	const expected = data['results'];

	test('Read a json file should equal to json object from endpoint', async () => {
		const test = await handler.display();
		expect(expected).toBe(test.doby);
	})
})