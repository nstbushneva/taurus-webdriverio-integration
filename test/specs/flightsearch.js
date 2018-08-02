var assert = require('assert');
const DEFAULT_TIMEOUT = 5000;

describe('flight search', () => {
  it('should load correct flight', () => {
    browser.url('http://blazedemo.com/')
    var title = browser.getTitle();
    assert.equal(title, 'BlazeDemo');
    browser
      .timeouts('implicit', DEFAULT_TIMEOUT)
      .selectByValue('[name="fromPort"]','Portland')
      .selectByValue('[name="toPort"]','New York')
      .click('[value="Find Flights"]')
      .waitForVisible('h3=Flights from Portland to New York:')
    })
  });