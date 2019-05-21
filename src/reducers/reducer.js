import { LOAD_BOOKS } from "../actions/bookAction"

const initialState = {
  books: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_BOOKS: {
      return { ...state, books: action.payload}
    }

    default:
      return state;
  }
}

export default reducer;
