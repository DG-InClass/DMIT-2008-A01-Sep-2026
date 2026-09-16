/**
 * Displays a weather forecast for a given location.
 * @param {Object[]} data - The array of forecast weather objects.
 * @param {Object} el - The reference to the display DOM element.
 */
export const displayForecast = (data, el) => {
    console.log(data);
    data = data.list;
    let list = document.createElement('ul'),
        currDate,
        nextDate,
        currItem;

    data.forEach((item) => {
        // destructuring for display variables
        let {dt_txt: date} = item, {
                temp_max: high,
                temp_min: low
            } = item.main, {main: cond} = item.weather[0];

        nextDate = date.split(' ')[0];
        if (currDate !== nextDate) {
            currDate = nextDate;

            // create a new item
            currItem = document.createElement('li');
            currItem
                .classList
                .add('forecast-item');
            currItem.innerHTML = `<p>${currDate}</p>`;
        }

        currItem.innerHTML += `
            <div class="forecast-detail">
                <p><strong><span class="time">Time: ${date.substr(date.indexOf(' '))}</span></strong></p>
                <ul>
                    <li class="condition"> Condition: ${cond}</li>
                    <li class="temp">Temp: ${ ((high + low) / 2)}</li>
                </ul>
            </div>
        `;

        list.append(currItem);
    });

    el.append(list);
}