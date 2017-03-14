describe('reverseString', () => {

  describe('new reverseString()', () => {
    it('reverses the string', () => {
      expect(reverseString("abc")).toEqual("cba");
    });

    it('returns a string value', () => {
      let result;
      expect(reverseString("result")).toEqual(jasmine.any(String));
    });

    it('is defined', () => {
      let result;
      expect(reverseString("result")).toBeDefined();
    });
  });
});
