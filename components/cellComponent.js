'strict'

var React = require('react/addons');
var cellStyle = require('../public/styles/cellStyle')

var Cell = React.createClass({displayName: "Cell",

  propTypes: {
    position: React.PropTypes.arrayOf(React.PropTypes.number),
    grey: React.PropTypes.bool
  },

  render: function() {

    var cellColour = this.props.grey ? "grey" : "white";

    return (
      React.createElement("div", {id: this.props.id, className: "cell", "data-pos": this.props.position, 
      style: cellStyle(cellColour)}, 
      this.props.children
      )
    );
  }
});

module.exports = Cell;
