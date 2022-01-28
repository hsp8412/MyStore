import React, { Component } from "react";
import { getProducts } from "../service/products";
import StockTable from "./stockTable";
import Pagi from "./pagination";
import { Button, Table, Col, Row, Container } from "react-bootstrap";

class Stock extends React.Component {
  state = {
    allProducts: [],
    pageSize: 4,
    currentPage: 1,
  };

  componentDidMount() {
    this.setState({ allProducts: getProducts() });
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    return (
      <div>
        <Container>
          <StockTable products={this.state.allProducts} />
          <Pagi
            itemsCount={this.state.allProducts.length}
            pageSize={this.state.pageSize}
            onPageChange={this.handlePageChange}
            currentPage={this.state.currentPage}
          />
        </Container>
      </div>
    );
  }
}

export default Stock;
