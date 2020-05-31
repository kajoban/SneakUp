import ShoeData from "../data/ShoeData";

const initialState = {
  shoes: ShoeData.shoes,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_BOOKMARK":
      console.log("toggle bookmark " + action.id);
      return state;
    default:
      return state;
  }
};

export default rootReducer;
