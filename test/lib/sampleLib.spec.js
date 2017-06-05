import {
    expect
} from 'chai';

import * as sampleLib from './../../dist/sampleLib';

describe('Given the Util library', function() {
    it('Should return the weather of london city', function(done) {
        sampleLib.weather('london')
            .then(response => {
                expect(response, 'response is not as expected').to.exist;
                expect(response.description, 'response is not as expected').to.exist;
                done();
            }).catch(e => done(e));
    });
});

