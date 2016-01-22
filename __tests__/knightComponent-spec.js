jest.dontMock('../scripts/knightComponent.js');
jest.dontMock('../node_modules/jquery/dist/jquery');
jest.dontMock('../node_modules/jquery-ui/jquery-ui');

var React = require('react/addons');
var Knight = require('../scripts/knightComponent');
var TestUtils = React.addons.TestUtils;

describe('Knight', function() {

  var $ = require('../node_modules/jquery/dist/jquery');

  var knight = TestUtils.renderIntoDocument(
    <Knight />
  );

  it('should exists', function() {
    expect(TestUtils.isCompositeComponent(knight)).toBeTruthy();
  });

});
