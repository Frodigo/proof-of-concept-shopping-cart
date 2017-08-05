export const CART_SUMMARY_LOADING = 'CART_SUMMARY_LOADING';
export const GET_AVAILABLE_COUNTRIES = 'GET_AVAILABLE_COUNTRIES';
export const MARK_COUNTRY_AS_SELECTED = 'MARK_COUNTRY_AS_SELECTED';
export const GET_SHIPPING_METHODS = 'GET_SHIPPING_METHODS';
export const SELECT_SHIPPING_METHOD = 'SELECT_SHIPPING_METHOD';
export const COLLECT_TOTALS = 'COLLECT_TOTALS';

export const cartSummaryLoading = (isLoading) => {
    return {
        type: CART_SUMMARY_LOADING,
        isLoading
    }
};

export const getAvailableCountries = (countries) => {
    return {
        type: GET_AVAILABLE_COUNTRIES,
        countries
    }
};

export const markCountryAsSelected = (country) => {
    return {
        type: MARK_COUNTRY_AS_SELECTED,
        country
    }
};

export const getShippingMethods = (shippingMethods) => {
    return {
        type: GET_SHIPPING_METHODS,
        shippingMethods
    }
};

export const selectShippingMethod = (selectedShippingMethod) => {
    return {
        type: SELECT_SHIPPING_METHOD,
        selectedShippingMethod
    }
};

export const collectTotals = () => {
    return {
        type: COLLECT_TOTALS
    }
};
