import axios from 'axios'

export default async function getCountryInfo(countryName) {

    // create a promise for the axios request
    const promise = axios.get(`https://restcountries.eu/rest/v2/name/${countryName}`)

    // using .then, create a new promise which extracts the data
    const dataPromise = promise.then((response) => response.data)

    return dataPromise
}