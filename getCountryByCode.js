const getCountry = require("./getCountry")

function getCountryByCode(code) {
    const { code: id, ...restCountry } = getCountry(code);
    return restCountry
}

module.exports = getCountryByCode