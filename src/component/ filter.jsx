import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";

const Filter = (props) => {
  const { items, onItemSelect, selectedItem, valueProperty, textProperty } =
    props;

  return (
    <ListGroup as="ul">
      <ListGroup.Item
        as="li"
        action
        onClick={() => onItemSelect(null)}
        active={selectedItem === null}
      >
        All Categories
      </ListGroup.Item>
      {items.map((item) => (
        <ListGroup.Item
          as="li"
          key={item[valueProperty]}
          onClick={() => onItemSelect(item)}
          active={item === selectedItem}
          action
        >
          {item[textProperty]}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

Filter.defaultProps = {
  valueProperty: "id",
  textProperty: "name",
};

export default Filter;
