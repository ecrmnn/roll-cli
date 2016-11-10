'use strict';

const chai = require('chai');
const expect = require('chai').expect;
const execa = require('execa');

describe('Roll Test Suite', function () {
  let result;

  before(function (done) {
    execa.shell('node ./src/index.js')
      .then(response => {
        result = response.stdout;
        done();
      });
  });

  it('roll between 1 and 100', function () {
    expect(result < 101 && result > 0).to.eql(true);
    expect(Number(result) == result).to.eql(true);
    expect(isNaN(result)).to.eql(false);
  });
});