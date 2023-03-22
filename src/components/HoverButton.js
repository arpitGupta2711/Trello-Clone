import React from "react";
import { Button } from "@mui/material";
import { useState } from "react";

const HoverButton = ({ text, styles, Component, Text }) => {
  const [hover, setHover] = useState(false);

  const handleMouseOver = () => {
    setHover(true);
  };
  const handleMouseOut = () => {
    setHover(false);
  };

  const style = {
    ...styles,
    backgroundColor: hover
      ? "rgba(255, 255, 255, 0.3)"
      : "rgba(255, 255, 255, 0.2)",
    textTransform: "none",
    borderRadius: "3px",
  };

  return (
    <Button
      style={style}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {Component}
      {Text}
    </Button>
  );
};

export default HoverButton;
