import * as constants from './../constants/constants';

/**
 * SQUARE API
 * @param width
 * @returns {number}
 */
const square = (width) => {
    return width * 4;
};

/**
 * RECTANGLE API
 * @param length
 * @param width
 * @returns {number}
 */
const rectangle = (length, width) => {
    return 2 * length + 2 * width;
};

const circle = (radius) => {
    return Math.round(2 * constants.PI * radius * 100) / 100;
};

export {square, rectangle, circle};
