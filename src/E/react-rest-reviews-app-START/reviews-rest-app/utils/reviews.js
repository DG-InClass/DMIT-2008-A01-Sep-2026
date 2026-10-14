// utils/reviews.js
import { BASE_URL } from "./api"; // this could be swapped out to use .env

const getReviews = () => {
    return fetch(`${BASE_URL}/reviews/`, {
        method: 'GET', // default
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(handleJsonResponse).then((data) => {
        // using Promise.resolve here will pass the data we have fetched
        // This is useful if we want to pre-process the data
        return Promise.resolve(data);
    });
}

const postReview = ({title, comment, rating}) => {
    return fetch(`${BASE_URL}/reviews/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            //              \__ mime type ___/
        },
        body: JSON.stringify({ title, comment, rating })
    }).then(handleJsonResponse);
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

export { getReviews, postReview }
