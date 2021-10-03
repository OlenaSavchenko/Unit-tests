const getCountry = require("./getCountry")

describe("testing getCountry fn", () => {
    test("should return country code, name, capital, area, continent", () => {
        expect(getCountry("IN")).toEqual({
            code: 'IN',
            name: 'India',
            capital: 'New Delhi',
            area: 3_287_590,
            continent: 'AS'

        })
    }),

        test("should return country code, name, capital, area, continent in case lowercase country code", () => {
            expect(getCountry("in")).toEqual({
                code: 'IN',
                name: 'India',
                capital: 'New Delhi',
                area: 3_287_590,
                continent: 'AS'

            })
        })
})

