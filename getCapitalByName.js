const getCountry = require("./getCountry")

function getCapitalByName(code) {
    const country = getCountry(code)
    const { capital, name } = country
    return { capital, name }
}

module.exports = getCapitalByName