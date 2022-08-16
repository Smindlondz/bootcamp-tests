const chai = window.chai
const assert = chai.assert

describe('greet', () =>{
    it("should return 'Hello, Mandla' when Mandla is passed as parameter", () => {
        assert(greet("Mandla"));
    })
})