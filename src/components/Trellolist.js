import React from "react";
import TrelloCard from "./TrelloCard";
import TrelloActionButton from "./TrelloActionButton";
import { Droppable, Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Trellolist = ({ title, cards, id, index }) => {
  return (
    <Draggable draggableId={String(id)} index={index}>
      {(provided) => (
        <Title
          {...provided.draggableProps}
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          style={{
            cursor: "pointer",

            ...provided.draggableProps.style,
          }}
        >
          <Droppable droppableId={String(id)}>
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                <div
                  style={{
                    color: "#172b4d",
                    fontWeight: "600",
                    boxSizing: "border-box",
                    display: "block",
                    lineHeight: "20px",
                    padding: "4px 8px",
                    margin: "0 0 8px",
                    overflow: "hidden",
                    overflowWrap: "break-word",
                    height: "28px",

                    maxHeight: "256px",
                    minHeight: "20px",
                  }}
                >
                  {title}
                </div>
                {cards.map((card, index) => (
                  <TrelloCard
                    key={card.id}
                    text={card.text}
                    id={card.id}
                    index={index}
                    listId={id}
                  />
                ))}
                {provided.placeholder}
                <TrelloActionButton id={id} />
              </div>
            )}
          </Droppable>
        </Title>
      )}
    </Draggable>
  );
};
const Title = styled.div`
  background-color: #ebecf0;
  border-radius: 3px;
  box-sizing: border-box;
  width: 271px;
  max-height: 100%;
  white-space: normal;
  padding: 8px;
  height: 100%;
  margin-right: 8px;
  cursor: "pointer";
`;

export default Trellolist;
