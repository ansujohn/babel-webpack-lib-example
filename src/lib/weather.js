require('isomorphic-fetch');
import * as constants from './../constants/constants';

let getWeather = (city) => {
    console.log('city :- ' + city);
    const url = `http://api.openweathermap.org/data/2.5/weather?APPID=${constants.WEATHER_API_KEY}&q=${city}`;
    fetch(url)
        .then(function(response) {
            if (response.ok) {
                console.log('1st response ok');
            } else {
                throw new Error('Bad response from server ' + response.status);
            }
            return response.json();
        })
        .then(function(data) {
            console.log('2nd ' + data.weather[0].description);
            return data.weather[0].description;
        })
        .catch(function(error) {
            console.log('There has been a problem with the fetch operation: ' + error.message);
        });
};

export {getWeather};

