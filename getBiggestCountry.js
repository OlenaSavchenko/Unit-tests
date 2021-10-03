
function getBiggestCountry(arr) {
    const country = arr.reduce((max, country) => {
        return country.area > max.area ? country : max
    })
    const { name, area } = country
    return { name, area }
}

module.exports = getBiggestCountry