
const getContinentData = require("./getContinentData")

describe("testing getContinentData fn", () => {
    test("should return total area and countries", () => {
        expect(getContinentData("EU")).toEqual({
            area: 4849670,
            countries: ["Germany", "Denmark", "Ukraine", "United Kingdom"]
        })
    }),
        test("should return total area and countries in case lowercase continent data", () => {
            expect(getContinentData("eu")).toEqual({
                area: 4849670,
                countries: ["Germany", "Denmark", "Ukraine", "United Kingdom"]
            })
        })



})

