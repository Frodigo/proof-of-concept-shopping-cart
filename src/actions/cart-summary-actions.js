export const CART_SUMMARY_LOADING = 'CART_SUMMARY_LOADING';
export const GET_AVAILABLE_COUNTRIES = 'GET_AVAILABLE_COUNTRIES';
export const MARK_COUNTRY_AS_SELECTED = 'MARK_COUNTRY_AS_SELECTED';

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
