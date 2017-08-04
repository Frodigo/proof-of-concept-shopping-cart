import  {
    CART_SUMMARY_LOADING,
    GET_AVAILABLE_COUNTRIES,
    MARK_COUNTRY_AS_SELECTED
} from './../actions/cart-summary-actions';

export default function cartSummaryReducer (state = {
    isLoading: false,
    availableCountries: [],
    userData: {
        selectedCountry: null
    }
}, action) {
    switch (action.type) {
        case CART_SUMMARY_LOADING: {
            return Object.assign({}, state, {
                isLoading: action.isLoading
            });
        }
        case GET_AVAILABLE_COUNTRIES: {
            return Object.assign({}, state, {
                availableCountries: action.countries
            })
        }
        case MARK_COUNTRY_AS_SELECTED: {
            return Object.assign({}, state, {
                userData: {
                    ...state.userData,
                    selectedCountry: action.country
                }
            })
        }
        default: {
            return state;
        }
    }
}