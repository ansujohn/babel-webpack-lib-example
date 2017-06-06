import * as constants from './../constants/constants';

const square = (width) => {
    return width * 4;
};
const rectangle = (length, width) => {
    return 2 * length + 2 * width;
};
const circle = (radius) => {
    return Math.round(2 * constants.PI * radius * 100) / 100;
};
export {square, rectangle, circle};
