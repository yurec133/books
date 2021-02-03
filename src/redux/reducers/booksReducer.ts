import {
  SET_LOADING,
  SET_BOOKS,
  SET_BOOK_DETAILS,
  SET_CHARACTERS,
  SET_LOADER
} from "../types/types";

type InitialStateType = {
  books: string[] | null;
  details: string[] | null;
  characters: string[] | null;
  isLoading: boolean;
  loader: boolean;
};
const initialState: InitialStateType = {
  books: [],
  details: [],
  characters: [],
  isLoading: true,
  loader: true
};

const booksReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SET_BOOKS: {
      return {
        ...state,
        books: action.payload,
        isLoading: false
      };
    }
    case SET_BOOK_DETAILS: {
      return {
        ...state,
        details: action.payload,
        isLoading: false
      };
    }
    case SET_CHARACTERS: {
      return {
        ...state,
        characters: action.payload,
        loader: false
      };
    }
    case SET_LOADING: {
      return {
        ...state,
        isLoading: action.payload
      };
    }
    case SET_LOADER: {
      return {
        ...state,
        loader: action.payload
      };
    }
    default:
      return state;
  }
};

export default booksReducer;
