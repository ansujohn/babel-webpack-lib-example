export const farenheitToCelsius = (temp) => {
    return (temp - 32) * 5 / 9;
};

export const celsiusToFarenheit = (temp) => {
    return temp * 9 / 5 + 32;
};
