jest.dontMock('../scripts/cellComponent.js');

var React = require('react/addons');
var Cell = require('../scripts/cellComponent');
var TestUtils = React.addons.TestUtils;

describe('Cell', function() {

  var cell = TestUtils.renderIntoDocument(
    <Cell grey={true} position={[0,0]}/>
  );

  it('should exists', function() {
    expect(TestUtils.isCompositeComponent(cell)).toBeTruthy();
  });

});
