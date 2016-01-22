jest.dontMock('../scripts/chessBoardComponent.js');
jest.dontMock('../node_modules/jquery/dist/jquery');
jest.dontMock('../node_modules/jquery-ui/jquery-ui');

var React = require('react/addons');
var ChessBoard = require('../scripts/chessBoardComponent');
var TestUtils = React.addons.TestUtils;

describe('Chess Board', function() {

  var chessBoard = TestUtils.renderIntoDocument(
    <ChessBoard knightPosition={[0,0]}/>
  );

  it('should exists', function() {
    expect(TestUtils.isCompositeComponent(chessBoard)).toBeTruthy();
  });

});
