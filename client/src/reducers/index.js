import ShoeData from "../data/ShoeData";

const initialState = {
  shoes: ShoeData.shoes,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_BOOKMARK":
      return {
        ...state,
        shoes: state.shoes.map((shoe) => {
          if (shoe.id !== action.id) {
            return shoe;
          } else {
            return {
              ...shoe,
              bookmarked: !shoe.bookmarked,
            };
          }
        }),
      };
    default:
      return state;
  }
};

export default rootReducer;
