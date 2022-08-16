describe('totalPhoneBill', () =>{
    it("should return the total phone bill for a passed phone services", () => {
        assert(totalPhoneBill('call, sms, call, sms, sms'));
    })
})