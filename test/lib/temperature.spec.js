import {
    expect
} from 'chai';

import * as perimeter from './../../src/lib/perimeter';

describe('Perimeter tests', function() {

    it('Should return the perimeter of square as 4 X length', function() {
        expect(perimeter.square(5)).to.be.equal(20);
    });

    it('Should return the perimeter of rectangle as (2 X length + 2 X width)', function() {
        expect(perimeter.rectangle(5, 4)).to.be.equal(18);
    });

    it('Should return the perimeter of circle as (2 X radius X PI)', function() {
        expect(perimeter.circle(5)).to.be.equal(31.42);
    });
});
