const getBiggestCountry = require("./getBiggestCountry");
const { COUNTRIES } = require("./data");

describe("testing getBiggestCountry fn", () => {
    test("should return biggest country`s name and area", () => {
        expect(getBiggestCountry(COUNTRIES)).toEqual({
            name: "United States",
            area: 9629091
        })
    })
})
