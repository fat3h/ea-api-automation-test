const supertest = require('supertest');


exports.sendGETRequest = async (baseUrl, apiEndPoint) => {
    try {
        let res = await supertest(baseUrl).get(apiEndPoint).retry(2)
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json');
        return res;
    } catch (err) {
        console.log('Error in sending GET Request: ', err);
    }
};
