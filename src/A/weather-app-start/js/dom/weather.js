/**
 * Displays the current weather for a given location.
 *
 * The supplied data is expected to match the structure of the Weather endpoint for the Open Weather API.
 *
 * The supplied HTMLElement is expected to contain children with the following IDs:
 *
 * - location
 * - date
 * - conditions
 * - temp
 * - sunrise
 * - sunset
 *
 * @param {Object} data - The object of returned weather data.
 * @param {HTMLElement} el - The reference to the display DOM element.
 * @returns {void}
 */
export const displayWeather = (data, el) => {
    // DOM insertion points
    let loc = el.querySelector('#location'),
        date = el.querySelector('#date'),
        conditions = el.querySelector('#conditions'),
        temp = el.querySelector('#temp'),
        sunrise = el.querySelector('#sunrise'),
        sunset = el.querySelector('#sunset');

    // display the current weather data
    loc.innerText = `${data.name}, ${data.sys.country}`;
    date.innerText = new Date(+ data.dt * 1000);
    conditions.innerText = data.weather[0].main;
    temp.innerText = data.main.temp;
    sunrise.innerText = new Date(+ data.sys.sunrise * 1000);
    sunset.innerText = new Date(+ data.sys.sunset * 1000);
}