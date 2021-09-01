import React from 'react'
import CountryList from './CountryList'
import Form from './Form'

class CountryApp extends React.Component {

    state = {
        countries: []
    }

    addNewCountry = (newCountry) => {
        this.setState(prevCountries => ({ countries: [...prevCountries.countries, newCountry] }))
    }

    render() {
        return (
            <div className="country-app">
                <div className="header">
                    <h1>Countries App</h1>
                </div>
                <Form addNewCountry={this.addNewCountry} countries={this.state.countries} />
                <CountryList countries={this.state.countries} />
                {console.log(this.state.countries)}
            </div>
        )
    }
}

export default CountryApp;