var expect = require('expect.js'),
    humanInterval = require('../index.js');

describe('Human Interval', function() {
  it("returns the number when given a number", function() {
    expect(humanInterval(5000)).to.be(5000);
  });

  describe('basic units', function() {
    it('understands seconds', function() {
      expect(humanInterval('1 second')).to.be(1000);
    });
    it('understands minutes', function() {
      expect(humanInterval('1 minute')).to.be(60000);
    });
    it('understands hours', function() {
      expect(humanInterval('1 hour')).to.be(3600000);
    });
    it('understands days', function() {
      expect(humanInterval('1 day')).to.be(86400000);
    });
    it('understands years', function() {
      expect(humanInterval('1 year')).to.be(31536000000);
    });
  });

  describe("basic numbers", function() {
    it("understands numbers", function() {
      expect(humanInterval('2 seconds')).to.be(2000);
    });

    it("understands decimals", function() {
      expect(humanInterval('2.5 seconds')).to.be(2500);
    });
  });

  describe("english numbers", function() {
    it("understands numbers", function() {
      expect(humanInterval("two seconds")).to.be(2000);
    });
  });

  describe("mixes", function() {
    it("works with long numbers", function() {
      expect(humanInterval('3 minutes and 30 seconds')).to.be(210000);
    });

    it("works with mixed units", function() {
      expect(humanInterval('3 minutes and 30 seconds')).to.be(210000);
    });

    it("works with mixed time expressions", function() {
      expect(humanInterval('three minutes and 30 seconds')).to.be(210000);
      expect(humanInterval('three minutes 30 seconds')).to.be(210000);
    });
  });
});
