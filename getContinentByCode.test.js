const getContinentByCode = require("./getContinentByCode");


describe("testing getContinentByCode fn", () => {
    test("should return continent", () => {
        expect(getContinentByCode("DE")).toBe("Europe")
    })
})
