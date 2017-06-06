
/**
 * farenheitToCelsius
 * @param temp temperature
 * @returns {number}
 */
export const farenheitToCelsius = (temp) => {
    return (temp - 32) * 5 / 9;
};
/**
 * celsiusToFarenheit
 * @param temp temperature
 * @returns {number}
 */
export const celsiusToFarenheit = (temp) => {
    return temp * 9 / 5 + 32;
};
