import {
    getAvailableCountries,
    cartSummaryLoading
} from './../actions/cart-summary-actions'

require('./data/available-countries.json');

const AVAILABLE_COUNTRIES_URL = 'http://localhost:8080/data/available-countries.json';

export function fetchAvailableCountries() {
    return (dispatch) => {
        dispatch(cartSummaryLoading(true));
        fetch(AVAILABLE_COUNTRIES_URL)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(cartSummaryLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((countries) => dispatch(getAvailableCountries(countries)))
            .catch((error) => console.error(error));
    };
}
