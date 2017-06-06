import {
    expect
} from 'chai';

import * as temperature from './../../src/lib/temperature';

describe('Temperature tests', function() {

    it('Should return the temperature in Fareheit', function() {
        expect(temperature.celsiusToFarenheit(37)).to.be.equal(98.6);
    });

    it('Should return the temperature in Celsius', function() {
        expect(temperature.farenheitToCelsius(98.6)).to.be.equal(37);
    });
});
