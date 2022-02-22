import React, { Component } from "react";
import { getProducts } from "../service/products";
import StockTable from "./stockTable";
import Pagi from "./pagination";
import { Button, Table, Col, Row, Container } from "react-bootstrap";
import Filter from "./ filter";
import { getCategories } from "../service/categories";

class Stock extends React.Component {
  state = {
    allProducts: [],
    allCategories: [],
    pageSize: 4,
    currentPage: 1,
    selectedCategory: null,
  };

  componentDidMount() {
    this.setState({
      allProducts: getProducts(),
      allCategories: getCategories(),
    });
  }

  handlePageChange = (page) => {
    console.log(page);
    this.setState({ currentPage: page });
  };

  handleSelectItem = (category) => {
    console.log(category);
    this.setState({ selectedCategory: category });
  };

  render() {
    return (
      <div style={{ marginTop: "20px" }}>
        <Container>
          <Row>
            <Col>
              <Filter
                items={this.state.allCategories}
                onItemSelect={this.handleSelectItem}
                selectedItem={this.state.selectedCategory}
              />
            </Col>
            <Col md={9}>
              <StockTable
                products={this.state.allProducts}
                pageSize={this.state.pageSize}
                currentPage={this.state.currentPage}
                selectedCategory={this.state.selectedCategory}
              />
              <Pagi
                itemsCount={this.state.allProducts.length}
                pageSize={this.state.pageSize}
                onPageChange={this.handlePageChange}
                currentPage={this.state.currentPage}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Stock;
