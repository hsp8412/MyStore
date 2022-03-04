import React, { Component } from "react";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";

const ProductDetails = (props) => {
  const { id } = useParams();
  return (
    <div>
      <h1>ProductId: {id}</h1>
      <Button variant="primary" onClick={() => props.history.push("/products")}>
        Save
      </Button>{" "}
    </div>
  );
};

export default ProductDetails;
