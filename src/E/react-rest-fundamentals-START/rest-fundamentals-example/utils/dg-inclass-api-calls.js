// utils/dg-inclass-api-calls.js
const API_BASE = 'https://dg-inclass.github.io/api';

export function getStates() {
    return fetch(`${API_BASE}/countries/states.json`)
        .then(handleJsonResponse).then(unpackData);
}

export function getCities() {
    return fetch(`${API_BASE}/countries/cities.json`)
        .then(handleJsonResponse).then(unpackData);
}

export function getCountries() {
    return fetch(`${API_BASE}/countries/countries.json`)
        .then(handleJsonResponse).then(unpackData);
}

const unpackData = async ({error, msg, data}) => {
    if(error) {
        throw new Error(msg);
    }
    return data;
}

/**
 * Process a fetch() request as expecting a JSON response
 * @param {Response} response - An HTTP Response object
 * @returns {Promise<any>} - Some JavaScript object or array
 */
const handleJsonResponse = (response) => {
    // Check if the response is good/ok
    if(!response.ok) {
        throw new Error(`Server error: ${response.status}\n${response.statusText}`);
    }

    // Check if the response gave us JSON data
    const contentType = response.headers.get('content-type');
    if(!contentType || !contentType.includes('application/json')) {
        throw new Error(`Server did not return JSON data: ${contentType}`);
    }

    // Return JSON
    return response.json();
}