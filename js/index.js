var React = require('react'),
    Gameboy = require('gbn'),
    CPU = require('./components/cpu'),
    Memory = require('./components/memory');

var gb = new Gameboy();
gb.cpu.register.A = 235;
gb.cpu.register.B = 108;

var Visualizer = React.createClass({
  render: function() {
    return (
      <div>
        <CPU cpu={gb.cpu}/>
        <Memory mmu={gb.mmu}/>
      </div>
    );
  }
});

React.render(
    <Visualizer />,
  document.getElementById('app')
);


// render canvas
var canvas = document.getElementById('lcd');
var ctx = canvas.getContext('2d');
ctx.putImageData(new ImageData(gb.gpu.screen, 160, 144), 0, 0);
