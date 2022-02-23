import React, { Component } from "react";
import { Table, Button, Col, Row } from "react-bootstrap";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

class StockTable extends React.Component {
  columns = [
    {
      path: "name",
      label: "Name",
    },
    { path: "type.name", label: "Type" },
    {
      path: "stock",
      label: "Stock",
    },
    {
      path: "price",
      label: "Price",
    },
    {
      key: "modify",
      content: (product) => (
        <Button variant="primary" size="sm">
          Modify
        </Button>
      ),
    },
    {
      key: "delete",
      content: (product) => (
        <Button
          variant="danger"
          size="sm"
          onClick={() => this.props.onDelete(product.id)}
        >
          Delete
        </Button>
      ),
    },
  ];

  render() {
    const { productsToDisplay, totalCount, onDelete, onSort, sortColumn } =
      this.props;

    if (totalCount === 0) return <p>There is no product to be shown.</p>;
    return (
      <React.Fragment>
        <p>Showing {totalCount} product(s). </p>
        <Table>
          <TableHeader
            columns={this.columns}
            onSort={onSort}
            sortColumn={sortColumn}
          />
          <TableBody items={productsToDisplay} columns={this.columns} />
        </Table>
      </React.Fragment>
    );
  }
}

export default StockTable;
