require('isomorphic-fetch');

import * as constants from './../constants/constants';

export default (city) => {
    if (!city) {
        throw new Error('Weather needs a city to be provided.');
    }

    const url = `http://api.openweathermap.org/data/2.5/weather?APPID=${constants.WEATHER_API_KEY}&q=${city}`;

    return fetch(url)
        .then(function(response) {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(`Bad response from server - status : ${response.status}`);
            }
        })
        .then(function(data) {
            return {
                weather: data.weather[0].main,
                description: data.weather[0].description
            };
        })
        .catch(function(error) {
            console.log(`There has been a problem with the fetch operation: ${error.message}`);
        });
};

