import React, { Component } from "react";
import { Table } from "react-bootstrap";
import TableBody from "./tableBody";
import TableHeader from "./tableHeader";

const MyTable = (props) => {
  const { columns, onSort, sortColumn, items } = props;
  return (
    <Table>
      <TableHeader columns={columns} onSort={onSort} sortColumn={sortColumn} />
      <TableBody items={items} columns={columns} />
    </Table>
  );
};

export default MyTable;
