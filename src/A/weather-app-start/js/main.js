/*
 * Simple weather display application for demonstrating fetch
 * calls to API endpoints that require an API key.
 * This project makes use of the OpenWeather API.
 */
// 🚨 This is code running in the browser.
// 🚨 Do not do this in real life.
// 🚨 It will leak your secrets to anyone who views your website! ☠️
// 🚨 Secrets should be used/processed on the SERVER only!!!!
const { VITE_DEFAULT_CITY, VITE_API_KEY } = import.meta.env;
console.log(VITE_DEFAULT_CITY, VITE_API_KEY);
// We now return you to regular code....

// TEMPORARY - Just testing the endpoints so we can get data
import { getCurrentWeather, getForecast } from './api/open-weather';
// Unpack the environment variable for the default city.
const stringParts = VITE_DEFAULT_CITY.split(',');
console.log(stringParts);
// Destructuring syntax on an array.
const [city,country] = stringParts;
//     [0]    [1]

getCurrentWeather({city:city, country, callback: console.log});
