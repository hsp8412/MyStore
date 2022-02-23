import React, { Component } from "react";
import { Table, Button, Col, Row } from "react-bootstrap";

class StockTable extends React.Component {
  raiseSort = (path) => {
    const sortColumn = { ...this.props.sortColumn };
    sortColumn.path = path;
    if (sortColumn.order == "asc") {
      sortColumn.order = "desc";
    } else {
      sortColumn.order = "asc";
    }
    console.log(sortColumn);
    this.props.onSort(sortColumn);
  };

  render() {
    const { productsToDisplay, totalCount, onDelete } = this.props;
    if (totalCount === 0) return <p>There is no product to be shown.</p>;
    return (
      <React.Fragment>
        <p>Showing {totalCount} product(s). </p>
        <Table>
          <thead>
            <tr>
              <th onClick={() => this.raiseSort("name")}>Name</th>
              <th onClick={() => this.raiseSort("type.name")}>Type</th>
              <th onClick={() => this.raiseSort("stock")}>Stock</th>
              <th onClick={() => this.raiseSort("price")}>Price</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {productsToDisplay.map(({ id, name, type, stock, price }) => (
              <tr key={id}>
                <td>{name}</td>
                <td>{type.name}</td>
                <td>{stock}</td>
                <td>{price}</td>
                <td>
                  <Button variant="primary" size="sm">
                    Modify
                  </Button>
                </td>
                <td>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => onDelete(id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </React.Fragment>
    );
  }
}

export default StockTable;
