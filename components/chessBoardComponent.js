'use strict';

var React = require('react/addons');
var Cell = require('./cellComponent')
var Knight = require('./knightComponent');
var validMove = require('./validMove');
var boardStyle = require('../public/styles/boardStyle');
var $ = require('../node_modules/jquery/dist/jquery');
require('../node_modules/jquery-ui/jquery-ui');

var ChessBoard = React.createClass({displayName: "ChessBoard",

  propTypes: {
    id: React.PropTypes.number,
    knightPosition: React.PropTypes.arrayOf(React.PropTypes.number)
  },

  componentDidMount: function() {
    $('.cell').droppable({
      drop: function(event, ui) {
        //transfers knight image from one div to another
        var knightId = $(ui.draggable).attr('id');
        var knightStyle = $(ui.draggable).attr('style');
        var knightSrc = $(ui.draggable).attr('src');
        var knightHtml = '<img id='+knightId+' style='+knightStyle+' src='+knightSrc+' />';

        // accessing current knights position
        var knightPosition = $(ui.draggable).parent().data('pos').split(',');
        var x = parseInt(knightPosition[0]);
        var y = parseInt(knightPosition[1]);

        // accessing prospective position
        var cell = $(this).attr('id');
        var cellPosition = $(this).data('pos').split(',');
        var newX = parseInt(cellPosition[0]);
        var newY = parseInt(cellPosition[1]);

        if(validMove(x, y, newX, newY)){
          $(ui.draggable).remove();
          $('#' + cell).append(knightHtml)
          $('#knight').draggable({
            helper: 'clone'
          });
        };
      }
    });
  },

  createCells: function(i) {
    //  alternates grey and white cells and doubles up every 8 cells
    var x = i % 8;
    var y = Math.floor(i / 8);
    var grey = (x + y) % 2 === 1;

    // renders knight within cell matching the given position
    var knightX = this.props.knightPosition[0];
    var knightY = this.props.knightPosition[1];
    var knight = (x==knightX && y==knightY) ? React.createElement(Knight, null) : null

    return (
      React.createElement(Cell, {id: i, key: i, grey: grey, position: [x,y]}, 
        knight
      )
    );
  },

  render: function() {
    var cells= [];
    for(let i=0; i<64; i++){
      cells.push(this.createCells(i))
    };

    return (
      React.createElement("div", {style: boardStyle()}, 
        cells
      )
    );
  }
});

module.exports = ChessBoard;
