import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography, TextField } from "@mui/material";
import { Draggable } from "react-beautiful-dnd";
import { useState } from "react";
import styled from "styled-components";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { editCard } from "../store/listReducerSlice";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
const TrelloCard = ({ text, id, index, listId }) => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [showEditIcon, setEditIcon] = useState(false);
  const dispatch = useDispatch();

  const handleEdit = () => {
    setOpen(true);
    setInput(text);
    console.log(listId);
  };
  const handleBlur = () => {
    console.log("blur");
    setOpen(false);
    setEditIcon(false);
  };
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSave = () => {
    console.log("function");
    // console.log('here',input);
    if (input !== "") {
      dispatch(editCard({ listId: listId, cardId: id, text: input }));
      setEditIcon(false);
    }
  };
  const handleMouseOver = () => {
    setEditIcon(true);
  };
  const handleMouseOut = () => {
    setEditIcon(false);
  };
  return (
    <Draggable draggableId={String(id)} index={index}>
      {(provided) => (
        <CardContainer
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={{
            cursor: "pointer",
            ...provided.draggableProps.style,
          }}
        >
          {!open ? (
            <Card onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  position: "relative",
                  paddingBottom: "2px",
                  padding: "6px 8px 2px",
                  "&:last-child": {
                    paddingBottom: "2px",
                  },
                }}
              >
                <Typography
                  sx={{
                    width: "100%",
                    color: "#172b4d",
                    wordWrap: "break-word",
                    overflow: "hidden",
                  }}
                  variant="div"
                  gutterBottom
                >
                  {text}

                  {showEditIcon ? (
                    <EditIconContainer
                      style={{
                        display: "flex",
                        position: "absolute",
                        right: "9px",
                        top: "6px",
                        backgroundColor: "#f4f5f7",
                        borderRadius: "3px",
                        width: "18px",
                        height: "20px",
                        alignItem: "center",
                        justifyContent: "center",
                      }}
                    >
                      <EditOutlinedIcon
                        sx={{
                          fontSize: "16px",
                          height: "20px",
                          lineHeight: "20px",
                          // width: "20px",
                          color: "#42526e",
                        }}
                        onClick={handleEdit}
                      >
                        edit
                      </EditOutlinedIcon>
                    </EditIconContainer>
                  ) : null}
                </Typography>
              </CardContent>
            </Card>
          ) : (
            <EditContainer>
              <TextField
                onBlur={handleBlur}
                value={input}
                onChange={handleChange}
                autoFocus
                sx={{ padding: 0, backgroundColor: "white" }}
                multiline
              />

              <Button
              
                variant="contained"
                style={{
                  color: "white",
                  backgroundColor: "#0079bf",
                  width: "30%",
                  marginTop: "8px",
                }}
                onMouseDown={handleSave}
              >
                Save
              </Button>
            </EditContainer>
          )}
        </CardContainer>
      )}
    </Draggable>
  );
};
const EditIconContainer = styled.div`
  background-clip: padding-box;
  background-color: var(--ds-surface-raised-hovered, #f4f5f7);
  background-origin: initial;
  border-radius: 3px;

  padding: -14px;
  position: absolute;
  right: 2px;
  top: 2px;

  z-index: 40;
`;
const CardContainer = styled.div`
  margin-bottom: 8px;

  cursor: "pointer";
`;

const EditContainer = styled.div`
  display: flex;
  flex-direction: column;
  alignitems: "center";
  border-radius: "3px";
`;

export default TrelloCard;
