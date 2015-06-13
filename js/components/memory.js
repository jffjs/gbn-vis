var React = require('react'),
    util  = require('../util');

module.exports = React.createClass({
  render: function() {
    var mmu = this.props.mmu;
    var rows = [];

    for (var addr = 0; addr < 100; addr++) {
      rows.push(
          <tr>
          <td>{util.hexByte(addr)}</td>
          <td>{util.hexByte(mmu.read8(addr))}</td>
          </tr>
      );
    }

    return (
        <table>
        <tbody>{rows}</tbody>
        </table>
    );
  }
});
