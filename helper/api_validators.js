//Contains functions to validate the api response

exports.validateResponseSchema = function (res) {
    if (res.status === 200) {
        res.body.should.be.an.Array();
        for (let i = 0; i < res.body.length; i++) {
            Object.keys(res.body[i]).length.should.be.equal(2, "name and/or bands property not present! " + JSON.stringify(res.body[i], null, 2));
            res.body[i].should.have.property('name').which.is.a.String().and.not.be.empty();
            res.body[i].should.have.property('bands').which.is.an.Array();
            for (let j = 0; j < res.body[i].bands.length; j++) {
                Object.keys(res.body[i].bands[j]).length.should.be.equal(2, "name and/or recordLabel property not present! " + JSON.stringify(res.body[i].bands[j], null, 2));
                res.body[i].bands[j].should.have.property('name').which.is.a.String().and.not.be.empty();
                res.body[i].bands[j].should.have.property('recordLabel').which.is.a.String().and.not.be.empty();
            }
        }
    } else if (res.status === 429) {
        res.body.should.be.a.String().and.not.be.empty();
    } else {
        res.status.should.equal(200 || 429, "Response status code " + res.status + " does not equal 200 or 429");
    }
}