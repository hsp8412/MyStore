import React, { Component } from "react";
import { Table, Button, Col, Row } from "react-bootstrap";

class StockTable extends React.Component {
  render() {
    const { productsToDisplay, totalCount } = this.props;
    if (totalCount === 0) return <p>There is no product to be shown.</p>;
    return (
      <React.Fragment>
        <p>Showing {totalCount} product(s). </p>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Stock</th>
              <th>Price</th>
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
                  <Button variant="danger" size="sm">
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
