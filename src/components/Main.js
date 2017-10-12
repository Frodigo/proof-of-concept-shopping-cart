import React from 'react';
import { Provider } from 'react-redux';
import cartStore from './../stores/cart-store';
import CartContainer from './../containers/cart-container';

const AppCompoent = () => (
    <main id="maincontent" className="page-main container" style={{margin: '20px auto'}}>
        <Provider store={cartStore}>
            <CartContainer/>
        </Provider>
    </main>
);

export default AppCompoent;