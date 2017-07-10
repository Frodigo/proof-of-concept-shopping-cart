import React from 'react';
import { Provider } from 'react-redux';
import cartStore from './../stores/cart-store';
import CartContainer from './../containers/cart-container';

const AppCompoent = () => (
    <div className="page-wrapper">
        <main id="maincontent" className="page-main" style={{margin: '20px auto'}}>
            <Provider store={cartStore}>
                <CartContainer/>
            </Provider>
        </main>
    </div>
);

export default AppCompoent;