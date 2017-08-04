import React from 'react';
import AvailableCountries from './Summary/Available-countries';

export default class CartSummaryComponent extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <aside className="cart-summary">
                <h3 className="summary title">Summary</h3>

                <h4>Estimate shipping and Tax</h4>

                <form>
                    <fieldset className="fieldset">
                        <AvailableCountries countries={this.props.countries}
                                            selectedCountry={this.props.selectedCountry} onChange={this.props.onMarkSelectedCountry}/>
                    </fieldset>
                </form>

            </aside>
        )
    }
}