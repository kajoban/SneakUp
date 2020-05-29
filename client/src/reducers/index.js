import ShoeData from "../data/ShoeData";

const initialState = {
  shoes: ShoeData.shoes,
};

const rootReducer = (state = initialState, action) => {
  return state;
};

export default rootReducer;
