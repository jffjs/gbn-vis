var React = require('react');

module.exports = React.createClass({
  getInitialState: function() {

    return {
      screen: new ImageData(160, 144)
    };
  },
  compoonentDidMount: function() {
    var ctx = document.getElementById('ldc').getContext('2d');
  },
  render: function() {
    this.state.ctx.putImageData(new ImageData(this.state.screen, 160, 144), 0, 0);

    return (
        <canvas id="lcd" width="160" height="144">
        </canvas>
    );
  }
});
