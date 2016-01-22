'strict'

function cellStyle(cellColour) {
  return({
    width: "100px",
    height: "100px",
    backgroundColor: cellColour,
    borderWidth: "2px",
    borderColor: "grey",
    display: 'inline-flex'
  })
};


module.exports = cellStyle;
