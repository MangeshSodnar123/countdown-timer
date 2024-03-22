import React from "react";
import { Card, Typography } from "@mui/material";
import "./NumberCard.css";

const NumberCard = ({ entity, value }) => {
  return (
    <Card variant="solid" className="card">
        <p className="digit">{value}</p>
        <p className="entity">{entity}</p>
    </Card>
  );
};

export default NumberCard;
