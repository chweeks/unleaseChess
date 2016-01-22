jest.dontMock('../scripts/validMove.js');

validMove = require('../scripts/validMove.js')

describe('valid move', function() {

  it('should be a valid move', function() {
    expect(validMove(0,0,1,2)).toBeTrue;
  });

  it('should be an invalid move', function() {
    var newY = 1;
    expect(validMove(0,0,1,1)).toBeFalse;
  });

});
