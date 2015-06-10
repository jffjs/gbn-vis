var React = require('react');

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
                <td>0x{cpu.register.A.toString(16).toUpperCase()}</td>
                <td>0x{cpu.register.F.toString(16).toUpperCase()}</td>
                <td>0x{cpu.register.B.toString(16).toUpperCase()}</td>
                <td>0x{cpu.register.C.toString(16).toUpperCase()}</td>
                <td>0x{cpu.register.D.toString(16).toUpperCase()}</td>
                <td>0x{cpu.register.E.toString(16).toUpperCase()}</td>
                <td>0x{cpu.register.H.toString(16).toUpperCase()}</td>
                <td>0x{cpu.register.L.toString(16).toUpperCase()}</td>
            </tr>
        </table>
    );
  }
});
