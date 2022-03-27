//Contains the test-cases 

const mocha = require('mocha');
const should = require('should');
const shouldHttp = require('should-http');
const supertest = require('supertest');
const apiEndPointHelper = require('../helper/api_endpoints.js');
const validator = require('../helper/api_validators.js');
const apiHelper = require('../helper/api_helper.js');

let baseUrl = apiEndPointHelper.baseUrl;
let apiEndPoint = apiEndPointHelper.apiEndPoint;

describe('Festivals Api Suite', function () {
    for (let i = 1; i <= 10; i++) {
        describe('GET Request test run ' + i, function () {
            it('Verify if response complies with API schema', async function () {
                let res = await apiHelper.sendGETRequest(baseUrl, apiEndPoint);
                console.log("Response statuscode is ", JSON.stringify(res.status, null, 2));
                console.log(JSON.stringify(res.body, null, 2));
                res.should.be.json();
                validator.validateResponseSchema(res);
            });
        });
    }
});
