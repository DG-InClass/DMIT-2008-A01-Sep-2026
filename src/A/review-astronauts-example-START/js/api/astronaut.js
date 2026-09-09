const BASE_URL = "https://lldev.thespacedevs.com/2.2.0"

// api functions here.
const getAstronautList = function() {
    return fetch(BASE_URL + '/astronaut/')
            .then(response => response.json());
}

export { getAstronautList }
