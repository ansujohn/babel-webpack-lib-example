import {
    expect
} from 'chai';

import weather from './../../src/lib/weather';

describe('Weather Tests', function() {
    it('Should return the weather of london city', function(done) {
        weather('london')
            .then(response => {
                expect(response, 'response is not as expected').to.exist;
                expect(response.weather, 'response is not as expected').to.exist;
                expect(response.description, 'response is not as expected').to.exist;
                done();
            }).catch(e => done(e));
    });
});

