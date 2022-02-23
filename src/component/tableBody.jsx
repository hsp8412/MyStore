import React, { Component } from "react";
import _ from "lodash";
class TableBody extends Component {
  renderCell(item, column) {
    if (column.path) return _.get(item, column.path);
    return column.content(item);
  }

  createKey(item, column) {
    const key = item.id.toString() + (column.path || column.key);
    return key;
  }

  render() {
    const { items, columns } = this.props;
    return (
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            {columns.map((column) => (
              <td key={this.createKey(item, column)}>
                {this.renderCell(item, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
