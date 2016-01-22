'strict'

function validMove(x, y, newX, newY) {

  return ((Math.abs(newX - x) == 2 && (Math.abs(newY - y) == 1)) ||
          (Math.abs(newY - y) == 2 && (Math.abs(newX - x) == 1)) )
};

module.exports = validMove;
