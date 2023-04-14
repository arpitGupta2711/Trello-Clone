import React from "react";
import { useState } from "react";
import { Icon } from "@mui/material";
import { TextField } from "@mui/material";
import { Card, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addList, addCard } from "../store/listReducerSlice";

const TrelloActionButton = (props) => {
  const dispatch = useDispatch();
  const [formOpen, setFormOpen] = useState({
    value: false,
    text: "",
  });
  const list = props.list;
  const buttonText = list ? "Add another list" : "Add another card";
  const buttonTextOpacity = list ? 1 : 0.5;
  const buttonTextColor = list ? "white" : "inherit";
  const buttonTextBackground = list ? "rgba(0,0,0,.15)" : "inherit";
  const placeholder = list
    ? "Enter list title..."
    : "Enter a title for this card ...";
  const buttonTitle = list ? "Add List" : "Add Card";

  const openForm = () => {
    setFormOpen((prev) => {
      return { ...prev, value: true };
    });
  };
  const closeForm = (e) => {
    setFormOpen((prev) => {
      return { value: false, text: "" };
    });
  };
  const handleInputChange = (e) => {
    setFormOpen((prev) => {
      return { ...prev, text: e.target.value };
    });
  };
  const handleAddList = (e) => {
    const text = formOpen.text;
    if (text) {
      dispatch(addList(text));
      setFormOpen({ value: false, text: "" });
    }
    return null;
  };
  const handleAddCard = (e) => {
    const text = formOpen.text;
    if (text) {
      dispatch(addCard({ text: text, id: props.id }));
      setFormOpen({ value: false, text: "" });
    }
    return null;
  };

  const style = {
    backgroundColor: "#ebecf0",
    padding: list ? "8px" : "inherit",
    borderRadius: "3px",
  };
  return (
    <div>
      {!formOpen.value ? (
        <div
          onClick={openForm}
          style={{
            ...styles.openForButtonGroup,
            opacity: buttonTextOpacity,
            color: buttonTextColor,
            backgroundColor: buttonTextBackground,
          }}
        >
          <Icon>add</Icon>
          <p>{buttonText}</p>
        </div>
      ) : (
        <div style={style}>
          <Card
            style={{
              minHeight: 85,
              minWidth: 234,
              padding: "6px 8px 2px",
            }}
          >
            <TextField
              placeholder={placeholder}
              required
              autoFocus
              onBlur={closeForm}
              multiline
              sx={{
                backgroundColor: "white",
                "& fieldset": { border: "none" },
                overflow: "hidden",
                padding: "0",
              }}
              value={formOpen.text}
              onChange={handleInputChange}
            />
          </Card>
          <div style={styles.formButtonGroup}>
            <Button
              onMouseDown={list ? handleAddList : handleAddCard}
              variant="contained"
              style={{ color: "white", backgroundColor: "#0079bf" }}
            >
              {buttonTitle}
            </Button>
            <Icon style={{ marginLeft: 8, cursor: "pointer" }}>close</Icon>
          </div>
        </div>
      )}
    </div>
  );
};
const styles = {
  openForButtonGroup: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    borderRadius: 3,
    height: 36,
    width: 272,
    paddingLeft: 10,
  },
  formButtonGroup: {
    marginTop: 8,
    display: "flex",
    alignItems: "center",
  },
};

export default TrelloActionButton;
