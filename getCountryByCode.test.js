const getCountryByCode = require("./getCountryByCode")

describe("Retesting getCountryByCode fn", () => {
    test("should return country name, capital, area, continent", () => {
        expect(getCountryByCode("IN")).toEqual({
            name: 'India',
            capital: 'New Delhi',
            area: 3_287_590,
            continent: 'AS'
        })
    })
})