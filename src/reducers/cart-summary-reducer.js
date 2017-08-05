import  {
    CART_SUMMARY_LOADING,
    GET_AVAILABLE_COUNTRIES,
    MARK_COUNTRY_AS_SELECTED,
    GET_SHIPPING_METHODS,
    SELECT_SHIPPING_METHOD
} from './../actions/cart-summary-actions';

export default function cartSummaryReducer (state = {
    isLoading: false,
    availableCountries: [],
    shippingMethods: [],
    userData: {
        selectedCountry: '',
        selectedShippingMethod: ''
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
        case GET_SHIPPING_METHODS: {
            return Object.assign({}, state, {
                shippingMethods: action.shippingMethods
            })
        }
        case SELECT_SHIPPING_METHOD: {
            return Object.assign({}, state, {
                userData: {
                    ...state.userData,
                    selectedShippingMethod: action.selectedShippingMethod
                }
            })
        }
        default: {
            return state;
        }
    }
}