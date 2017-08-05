import {
    getAvailableCountries,
    cartSummaryLoading,
    getShippingMethods
} from './../actions/cart-summary-actions'

require('./data/available-countries.json');
require('./data/shipping-methods.json');

const AVAILABLE_COUNTRIES_URL = 'http://localhost:8080/data/available-countries.json';
const SHIPPING_METHODS_URL = 'http://localhost:8080/data/shipping-methods.json?country_id=';

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

export function fetchAvailableShippingMethodsForCountry (countryId) {
    return (dispatch) => {
        dispatch(cartSummaryLoading(true));
        fetch(SHIPPING_METHODS_URL + countryId)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(cartSummaryLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((shippingMethods) => dispatch(getShippingMethods(shippingMethods)))
            .catch((error) => console.error(error));
    };
}
