import  {
    CART_SUMMARY_LOADING,
    GET_AVAILABLE_COUNTRIES,
    MARK_COUNTRY_AS_SELECTED,
    GET_SHIPPING_METHODS,
    SELECT_SHIPPING_METHOD,
    COLLECT_TOTALS
} from './../actions/cart-summary-actions';
import store from './../stores/cart-store';
import * as CartItemInterface from './../constants/interfaces/cart-item-interface';
import * as ShippingMethodInterface from './../constants/interfaces/shipping-method';

export default function cartSummaryReducer (state = {
    isLoading: false,
    availableCountries: [],
    shippingMethods: [],
    userData: {
        selectedCountry: '',
        selectedShippingMethod: ''
    },
    totals: {
        subtotal: 0,
        shipping: 0,
        orderTotal: 0
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
        case COLLECT_TOTALS: {
            let itemsTotals = _collectItemsTotals();
            let shippingTotals = _collectShippingTotals(state.shippingMethods, state.userData.selectedShippingMethod);

            return Object.assign({}, state, {
                totals: {
                    subtotal: itemsTotals,
                    shipping: shippingTotals,
                    orderTotal: itemsTotals + shippingTotals
                }
            })

        }
        default: {
            return state;
        }
    }
}

const _collectItemsTotals = () => {
    let totals = 0;
    store.getState().cartItems.items.map(item => {
       totals +=  parseInt(item[CartItemInterface.SUBTOTAL]);
    });

    return totals;
};

const _collectShippingTotals = (shippingMethods, selectedShippingMethodId) => {
    if (!selectedShippingMethodId) {
        return 0;
    } else {
        let selectedShippingMethod = shippingMethods.find((shippingMethod) => {
            console.log(shippingMethod[ShippingMethodInterface.ID], selectedShippingMethodId);
            return parseInt(shippingMethod[ShippingMethodInterface.ID]) === parseInt(selectedShippingMethodId)
        });

        console.log(selectedShippingMethod);

        return parseInt(selectedShippingMethod[ShippingMethodInterface.VALUE]);
    }
};