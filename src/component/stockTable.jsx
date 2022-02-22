import React, { Component } from "react";
import { Table, Button, Col, Row } from "react-bootstrap";
import { paginate } from "../utils/paginate";

class StockTable extends React.Component {
  render() {
    const { products, pageSize, currentPage } = this.props;
    if (products.length === 0) return <p>There is no product to display.</p>;
    const productsToDisplay = paginate(products, pageSize, currentPage);
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
          {productsToDisplay.map(({ id, name, stock, price }) => (
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
