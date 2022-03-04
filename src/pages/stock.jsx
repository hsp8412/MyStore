import React, { Component } from "react";
import { getProducts } from "../service/products";
import StockTable from "../component/stockTable";
import { paginate } from "../utils/paginate";
import Pagi from "../component/pagination";
import { Button, Table, Col, Row, Container } from "react-bootstrap";
import Filter from "../component/ filter";
import { getCategories } from "../service/categories";
import _ from "lodash";

class Stock extends React.Component {
  state = {
    allProducts: [],
    allCategories: [],
    pageSize: 4,
    currentPage: 1,
    selectedCategory: null,
    sortColumn: { path: "name", order: "asc" },
  };

  componentDidMount() {
    this.setState({
      allProducts: getProducts(),
      allCategories: getCategories(),
    });
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleSelectItem = (category) => {
    this.setState({ selectedCategory: category, currentPage: 1 });
  };

  handleDelete = (id) => {
    const products = this.state.allProducts.filter(
      (product) => product.id !== id
    );
    this.setState({ allProducts: products });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  render() {
    const {
      allProducts,
      allCategories,
      pageSize,
      currentPage,
      selectedCategory,
      sortColumn,
    } = this.state;

    const filtered = selectedCategory
      ? allProducts.filter((product) => product.type.id === selectedCategory.id)
      : allProducts;

    const sorted = _.orderBy(filtered, sortColumn.path, sortColumn.order);

    const productsToDisplay = paginate(sorted, pageSize, currentPage);

    return (
      <div style={{ marginTop: "20px" }}>
        <Container>
          <Row>
            <Col>
              <Filter
                items={allCategories}
                onItemSelect={this.handleSelectItem}
                selectedItem={selectedCategory}
              />
            </Col>
            <Col md={9}>
              <StockTable
                productsToDisplay={productsToDisplay}
                totalCount={filtered.length}
                onDelete={this.handleDelete}
                onSort={this.handleSort}
                sortColumn={sortColumn}
              />
              <Pagi
                itemsCount={filtered.length}
                pageSize={pageSize}
                onPageChange={this.handlePageChange}
                currentPage={currentPage}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Stock;
