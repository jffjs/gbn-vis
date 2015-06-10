var React = require('react'),
    Gameboy = require('gbn'),
    CPU = require('./components/cpu');

var gb = new Gameboy();
gb.cpu.register.A = 235;
gb.cpu.register.B = 108;

React.render(
    <CPU cpu={gb.cpu}/>,
  document.getElementById('app')
);

