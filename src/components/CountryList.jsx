import React from 'react'
import Country from './Country'

class CountryList extends React.Component {
    render() {
        return (
            <div className="country-list">
                <h2>Countries List</h2>
                <div className="country-gallery">
                    {this.props.countries.map((country) => <Country {...country} key={country.alpha3Code} />)}
                </div>
            </div>
        )
    }
}

export default CountryList;