var React = require('react');

module.exports = React.createClass({
  getInitialState: function() {

    return {
      screen: new ImageData(this.props.gpu.screen, 160, 144)
    };
  },
  compoonentDidMount: function() {
    var ctx = document.getElementById('ldc').getContext('2d');
    ctx.putImageData(new ImageData(this.state.screen, 160, 144), 0, 0);
  },
  shouldComponentUpdate: function() {
    return false; // don't rerender
  },
  render: function() {

    return (
        <canvas id="lcd" width="160" height="144">
        </canvas>
    );
  }
});
