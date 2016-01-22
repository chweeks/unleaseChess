'use strict';

var React = require('react/addons');
var imageStyle = require('../public/styles/imageStyle')
var $ = require('../node_modules/jquery/dist/jquery');
require('../node_modules/jquery-ui/jquery-ui');


var Knight = React.createClass({displayName: "Knight",

  componentDidMount: function() {
    $('#knight').draggable({
      helper: 'clone'
    });
  },

  render: function() {
    return(
      React.createElement("img", {id: "knight", style: imageStyle(), src: "/public/images/blackKnight.png"})
    );
  }
});

module.exports = Knight;
