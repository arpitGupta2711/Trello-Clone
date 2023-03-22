import { createSlice } from "@reduxjs/toolkit";

export const listReducerSlice = createSlice({
  name: "listReducer",
  initialState: [],
  reducers: {
    editCard: (state, action) => {
      console.log("herer");
      console.log(action.payload);
      const { listId, cardId, text } = action.payload;

      state.forEach((list) => {
        if (parseInt(list.id) === parseInt(listId)) {
          list.cards.forEach((card) => {
            if (parseInt(card.id) === parseInt(cardId)) {
              card.text = text;
            }
          });
        }
      });
      const a = [...state];
      localStorage.setItem("lists", JSON.stringify(a));
    },

    getList: (state) => {
      const lists = JSON.parse(localStorage.getItem("lists"));

      console.log(typeof lists);
      if (lists == null) {
        console.log("emoty");
      } else {
        return [...lists];
      }
    },
    addList: (state, action) => {
      const newList = {
        title: action.payload,
        cards: [],
        id: Date.now(),
      };

      state.push(newList);
      const a = [...state];
      localStorage.setItem("lists", JSON.stringify(a));
    },
    addCard: (state, action) => {
      const newCard = {
        text: action.payload.text,
        id: Date.now(),
      };

      const newState = state.map((list) => {
        if (list.id === action.payload.id) {
          return {
            ...list,
            cards: [...list.cards, newCard],
          };
        } else {
          return list;
        }
      });
      const a = newState;
      localStorage.setItem("lists", JSON.stringify(a));
      return newState;
    },
    dragHappened: (state, action) => {
      console.log(action.payload);
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexEnd,
        droppableIndexStart,
        type,
      } = action.payload;
      const newState = [...state];

      if (type === "list") {
        const list = newState.splice(droppableIndexStart, 1);
        newState.splice(droppableIndexEnd, 0, ...list);
        const nState = [...newState];
        const a = nState;
        localStorage.setItem("lists", JSON.stringify(a));
        return nState;
      }
      console.log("newState", newState);
      if (parseInt(droppableIdEnd) === parseInt(droppableIdStart)) {
        state.forEach((list) => {
          if (parseInt(list.id) === parseInt(droppableIdStart)) {
            const card = list.cards.splice(droppableIndexStart, 1);
            list.cards.splice(droppableIndexEnd, 0, ...card);
          } else {
            return list;
          }
        });
        const a = [...state];
        localStorage.setItem("lists", JSON.stringify(a));
      }
      if (parseInt(droppableIdEnd) !== parseInt(droppableIdStart)) {
        let card = {};
        state.forEach((list) => {
          if (parseInt(list.id) === parseInt(droppableIdStart)) {
            card = list.cards.splice(droppableIndexStart, 1);
          } else {
            return list;
          }
        });
        console.log("card", card);
        state.forEach((list) => {
          if (parseInt(list.id) === parseInt(droppableIdEnd)) {
            list.cards.splice(droppableIndexEnd, 0, ...card);
          } else {
            return list;
          }
        });

        const a = [...state];
        localStorage.setItem("lists", JSON.stringify(a));
      }
    },
  },
});

export const { addCard, addList, dragHappened, getList, editCard } =
  listReducerSlice.actions;

export default listReducerSlice.reducer;
