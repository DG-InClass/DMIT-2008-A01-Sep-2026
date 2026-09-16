import { getCurrentWeather, getForecast } from '../api/open-weather';
import { displayForecast } from '../dom/forecast';
import { displayWeather } from '../dom/weather';

/**
 * Registers an event listener for a form's submit event.
 * @param {{form: HTMLFormElement, defaultLocation: string}} formElement A form with a text input for location.
 * @returns {void}
 */
export const registerEventListener = function({form, defaultLocation, outputContainer}) {
    // Set a default location for the weather input
    form.elements.location.value = defaultLocation;

    const handler = createHandler(createWeatherCallback(outputContainer), createForecastCallback(outputContainer));

    form.addEventListener('submit', handler);
}

/**
 * Generates a callback function that displays the weather data in the supplied container.
 *
 * @param {HTMLElement} container - A DOM object with the requisite elements for displaying the current weather conditions. See {@link displayWeather}
 * @returns {Function} A callback function to display the current weather.
 */
const createWeatherCallback = (container) => (data) => {
    console.log(container);
    displayWeather(data, container);
}

/**
 * Generates a callback function that displays the 5-day forecast.
 *
 * @param {HTMLElement} container A DOM object in which to display the 5-day forecast details
 * @returns {Function} A callback function to display the 5-day forecast.
 */
const createForecastCallback = (container) => (data) => {
    displayForecast(data, container.querySelector('#forecast'));
}

/**
 * Generates an event handler for {@link SubmitEvent} events.
 *
 * @param {Function} weatherCallback The callback function to use when calling {@link getCurrentWeather}
 * @param {Function} forecastCallback The callback function to use when callint {@link getForecast}
 * @returns {Function} An event handler for `<Form>` submit events.
 */
const createHandler = (weatherCallback, forecastCallback) =>
    (/** @type {SubmitEvent} */submitEvent) => {
        submitEvent.preventDefault();
        let location = submitEvent.target.elements.location.value;
        let [city, country] = location.split(','); // Destructuring an array

        // fetch the weather data
        getCurrentWeather({city, country, callback: weatherCallback});

        // fetch the forecast data
        getForecast({city, country, callback: forecastCallback});
    }