
const getCapitalByName = require("./getCapitalByName")

describe("testing getCapitalByName fn", () => {
    test("should return name and capital", () => {
        expect(getCapitalByName("UA")).toEqual({
            name: 'Ukraine',
            capital: 'Kyiv'
        })
    })

})

