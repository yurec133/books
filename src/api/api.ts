import {
  setBooks,
  setBooksDetails,
  setLoading,
  setCharacters,
  setLoader, BooksActionsTypes
} from "../redux/actions/actionBooks";
import {Dispatch} from "redux";

export const fetchBooks = () => (dispatch: Dispatch<BooksActionsTypes>) => {
  dispatch(setLoading(true));
  fetch(`https://www.anapioficeandfire.com/api/books/?pageSize=12`)
    .then(resp => resp.json())
    .then(json => {
      dispatch(setBooks(json));
    });
};

export const fetchDetails = (id: string) => (dispatch: Dispatch<BooksActionsTypes> | any) => {
  dispatch(setLoading(true));
  fetch(`https://www.anapioficeandfire.com/api/books/${id}`)
    .then(resp => resp.json())
    .then(json => {
      dispatch(setBooksDetails(json));
      const { povCharacters } = json;
      return povCharacters;
    })
    .then(items => {
      dispatch(fetchCharacters(items));
    });
};

const fetchCharacters = (url: string[]) => (dispatch: Dispatch<BooksActionsTypes>) => {
  try {
    dispatch(setLoader(true));
    let promises =
      url &&
      url.map((item: any) => {
        return fetch(item).then(res => res.json());
      });
    Promise.all(promises).then(array => {
      dispatch(setCharacters(array));
    });
  } catch (e) {
    console.log("Now");
  }
};
