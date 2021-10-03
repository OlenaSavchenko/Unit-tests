const { COUNTRIES } = require("./data")

function getContinentData(continentCode) {
    const countriesArr = COUNTRIES.filter(({ continent }) => continent === continentCode.toUpperCase())
    const countries = countriesArr.map(({ name }) => name)
    const area = countriesArr.reduce((acc, { area: countryArea }) => {
        acc += countryArea;
        return acc;
    }, 0)

    return { area, countries };
}

module.exports = getContinentData