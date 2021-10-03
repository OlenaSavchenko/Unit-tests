const { COUNTRIES } = require("./data")


function getCountry(code) {
    const country = COUNTRIES.find(country => country.code === code.toUpperCase());
    return country

}

module.exports = getCountry