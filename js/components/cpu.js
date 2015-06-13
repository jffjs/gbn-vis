var React = require('react'),
    util  = require('../util');

module.exports = React.createClass({
  render: function() {
    var cpu = this.props.cpu;

    return (
        <table>
            <thead>
                <th colSpan="8" style={{textAlign: 'left'}}>Registers</th>
            </thead>
            <tr>
                <td>A</td>
                <td>F</td>
                <td>B</td>
                <td>C</td>
                <td>D</td>
                <td>E</td>
                <td>H</td>
                <td>L</td>
            </tr>
            <tr>
                <td>{util.hexByte(cpu.register.A)}</td>
                <td>{util.hexByte(cpu.register.F)}</td>
                <td>{util.hexByte(cpu.register.B)}</td>
                <td>{util.hexByte(cpu.register.C)}</td>
                <td>{util.hexByte(cpu.register.D)}</td>
                <td>{util.hexByte(cpu.register.E)}</td>
                <td>{util.hexByte(cpu.register.H)}</td>
                <td>{util.hexByte(cpu.register.L)}</td>
            </tr>
        </table>
    );
  }
});
