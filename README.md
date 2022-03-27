# EnergyAustralia Coding Test for Quality Engineers

This test is to verify the response of Festival API is as per the swagger specifications.
Language/tools used: JavaScript, Mocha, SuperTest, Should, Mochawesome

 Assumptions:

 1. All fields in response body are mandatory.
 2. Response status code must be 200 or 429.
 3. Response must be in json format.
 4. Only response schema is being verified. Response values are assumed to be correct.
 5. Due to the varying responses for each request, the test is run 10 times to highlight the defects.

To run test:

1. Install dependencies
```bash
npm install
```

2. Run the test
```bash
npm run test
```

3. Generate mochawesome report
```bash
npm run report
```