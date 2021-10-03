const getCountry = require("./getCountry");
const { CONTINENTS } = require("./data")

function getContinentByCode(code) {
    const { continent } = getCountry(code)
    return CONTINENTS[continent]
}

module.exports = getContinentByCode