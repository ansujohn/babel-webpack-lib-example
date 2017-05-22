var expect = require('chai').expect;
import * as sampleLib from './../../dist/sampleLib';

describe('Given the Util library for perimeter', function() {

    it('Should return the perimeter of square as 4 X length', function() {

        expect(sampleLib.perimeter.square(5)).to.be.equal(20);
    });

    it('Should return the perimeter of rectangle as (2 X length + 2 X width)', function() {
        expect(sampleLib.perimeter.rectangle(5, 4)).to.be.equal(18);
    });
});
