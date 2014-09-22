describe('Toons', function() {
  beforeEach(function() {
    browser.get('#!/toons');
  });

    it('display a list of toons', function() {
      var toonList = element.all(by.repeater('toon in toons'));
      expect(toonList.count()).toBe(2);
    });
});
