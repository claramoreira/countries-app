import React from 'react';
import getCountryInfo from './getCountryInfo';

class Form extends React.Component {

    state = {
        userInput: ''
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const newCountry = await (getCountryInfo(this.state.userInput))
        console.log(newCountry[0])
        var found = false;
        for (var i = 0; i < this.props.countries.length; i++) {
            if (this.props.countries[i].name == newCountry[0].name) {
                found = true;
                break;
            }
        }
        if (found) {
            alert("Não pode!")
        }
        else {
            this.props.addNewCountry(newCountry[0])
            this.setState({
                userInput: ''
            })
        }
    }

    render() {
        return (
            <form className="submit-form" onSubmit={this.handleSubmit} >
                <input value={this.state.userInput} onChange={(event) => this.setState({ userInput: event.target.value })} type="text" placeholder="Type any country" />
                <button>Add new country</button>
            </form>
        )
    }
}

export default Form;