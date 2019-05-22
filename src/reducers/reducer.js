import { LOAD_BOOKS } from "../actions/bookAction"
import { LOAD_HOUSES } from "../actions/houseAction"
import { GET_HOUSE } from "../actions/houseAction"
import { GET_CHARACTERS } from "../actions/characterAction"

const initialState = {
  books: [],
  houses: [],
  characters: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_BOOKS: {
      return { ...state, books: action.payload}
    }
    case LOAD_HOUSES: {
      return { ...state, houses: action.payload}
    }
    case GET_HOUSE: {
      return { ...state, chosenHouse: action.payload}
    }
    case GET_CHARACTERS: {
      return { ...state, characters: action.payload}
    }

    default:
      return state;
  }
}

export default reducer;
