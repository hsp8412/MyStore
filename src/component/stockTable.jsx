import React, { Component } from "react";
import { Table, Button, Col, Row } from "react-bootstrap";
import TableHeader from "./tableHeader";

class StockTable extends React.Component {
  render() {
    const { productsToDisplay, totalCount, onDelete, onSort, sortColumn } =
      this.props;
    const columns = [
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
      { key: "modify" },
      { key: "delete" },
    ];
    if (totalCount === 0) return <p>There is no product to be shown.</p>;
    return (
      <React.Fragment>
        <p>Showing {totalCount} product(s). </p>
        <Table>
          <TableHeader
            columns={columns}
            onSort={onSort}
            sortColumn={sortColumn}
          />
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
