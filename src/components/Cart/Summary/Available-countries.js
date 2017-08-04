import React from 'react';
import * as CountryInterface from './../../../constants/interfaces/country-interface';

export default class AvailableCountriesCOmponent extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div className="component field">
                <label className="label" htmlFor="countries">Country</label>

                <div className="control">
                    <select name="countries"
                            id="countries"
                            className="select" value={this.props.selectedCountry}
                            onChange={(event) => this.props.onChange(event.target.value)}>
                        <option value="-1">Please select a country</option>
                        {this.props.countries.map(country => {
                            return <option key={country[CountryInterface.ID]} value={country[CountryInterface.VALUE]}>
                                {country[CountryInterface.LABEL]}
                            </option>
                        })}
                    </select>
                </div>
            </div>
        )
    }
}
