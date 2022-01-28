import React, { Component } from "react";
import { Table, Button, Col, Row } from "react-bootstrap";

class StockTable extends React.Component {
  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Stock</th>
            <th>Price</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.props.products.map(({ id, name, stock, price }) => (
            <tr key={id}>
              <td>{name}</td>
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
    );
  }
}

export default StockTable;
