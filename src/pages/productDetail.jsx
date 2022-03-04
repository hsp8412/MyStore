import React, { Component } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const ProductDetails = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <div>
      <h1>Product id: {id}</h1>
      <Button variant="primary" onClick={() => navigate("/stock")}>
        Save
      </Button>{" "}
    </div>
  );
};

export default ProductDetails;
