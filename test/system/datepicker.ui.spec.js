// Generated by CoffeeScript 1.6.3
(function() {
  var Browser, html;

  Browser = require("zombie");

  html = "<html>\n<head></head>\n<body>\n  <div id=\"date-picker\" class=\"date\">Hello world!</div>\n</body>\n</html>";

  describe('angular-bootstrap-datepicker', function() {
    var browser;
    browser = new Browser();
    return it('should be able load the html', function(done) {
      return browser.load(html).then(function() {
        expect(browser.html().length).toBeGreaterThan(0);
        return done();
      });
    });
  });

}).call(this);
