import React from 'react';
import numberWithDots from './numberFormat';

class Country extends React.Component {


    render() {
        const colors = {
            Africa: 'rgba(0, 133, 199, .7)',
            Americas: 'rgba(244, 195, 0, .7)',
            Asia: 'rgba(143, 143, 143, .7)',
            Europe: 'rgba(0, 159, 61, .7)',
            Oceania: 'rgba(233, 0, 36, .7)'
        }
        return (
            <div className="country-card" key={this.props.alpha3Code} style={{ backgroundColor: colors[this.props.region] }}>
                <h1>{this.props.name}</h1>
                <div className="info">
                    <p className="info-label">Capital:</p>
                    <p>{this.props.capital}</p>
                </div>
                <div className="info">
                    <p className="info-label">Region:</p>
                    <p>{this.props.region}</p>
                </div>
                <div className="info">
                    <p className="info-label">Timezones:</p>
                    <p>{this.props.timezones.map((timezone) => { return <span key={timezone}>{timezone} / </span> })}</p>
                </div>
                <div className="info">
                    <p className="info-label">Population:</p>
                    <p>{numberWithDots(this.props.population)}</p>
                </div>
            </div>
        )
    }

}

export default Country;