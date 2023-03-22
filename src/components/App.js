import React from "react";

import Trellolist from "./Trellolist";
import TrelloActionButton from "./TrelloActionButton";
import { useSelector, useDispatch } from "react-redux";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { dragHappened, getList } from "../store/listReducerSlice";
import styled from "styled-components";
import { useEffect } from "react";
import Navbar from "./Navbar";
// import { getList } from "../store/listReducerSlice";

function App() {
  const home = useSelector((state) => state.lists);
  const dispatch = useDispatch();

  const handleDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;
    // console.log("hello");
    if (!destination) {
      return;
    }

    dispatch(
      dragHappened({
        droppableIdStart: source.droppableId,
        droppableIdEnd: destination.droppableId,
        droppableIndexStart: source.index,
        droppableIndexEnd: destination.index,
        draggableId: draggableId,
        type: type,
      })
    );
  };

  useEffect(() => {
    dispatch(getList());
  }, [dispatch]);
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="App">
        <Navbar />
        <Droppable droppableId="all-lists" direction="horizontal" type="list">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={{
                height: "calc(100vh - 84px)",
                padding: "10px",
                overflowX: "auto",
                background: "linear-gradient(to bottom,#0000003d 80px,#0000)",
              }}
            >
              <ListContainer>
                {home.map((list, index) => (
                  <Trellolist
                    id={list.id}
                    key={list.id}
                    title={list.title}
                    cards={list.cards}
                    index={index}
                  />
                ))}
                {provided.placeholder}
                <TrelloActionButton list />
              </ListContainer>
            </div>

            // {...provided.placeholder}
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
}
// height:100vh;
const ListContainer = styled.div`
  display: flex;
`;

export default App;
