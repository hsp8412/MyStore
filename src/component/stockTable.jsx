import React, { Component } from "react";
import { Table, Button, Col, Row } from "react-bootstrap";
import { paginate } from "../utils/paginate";
import Pagi from "./pagination";

class StockTable extends React.Component {
  render() {
    const { products, pageSize, currentPage, selectedCategory, onPageChange } =
      this.props;
    if (products.length === 0) return <p>There is no product to display.</p>;

    const filtered = selectedCategory
      ? products.filter((product) => product.type.id === selectedCategory.id)
      : products;

    const productsToDisplay = paginate(filtered, pageSize, currentPage);

    return (
      <React.Fragment>
        <p>Showing {filtered.length} products. </p>
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
        <Pagi
          itemsCount={filtered.length}
          pageSize={pageSize}
          onPageChange={onPageChange}
          currentPage={currentPage}
        />
      </React.Fragment>
    );
  }
}

export default StockTable;
