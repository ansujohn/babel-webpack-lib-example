const farenheitToCelsius = (temp) => {
    return (temp - 32) * 5 / 9;
};

const celsiusToFarenheit = (temp) => {
    return temp * 5 / 9 + 32;
};

export {farenheitToCelsius, celsiusToFarenheit};
