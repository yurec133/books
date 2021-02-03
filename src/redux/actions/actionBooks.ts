import {SET_BOOKS, SET_BOOK_DETAILS, SET_LOADING, SET_CHARACTERS, SET_LOADER} from "../types/types";

type SetBooksActionType = {
  type: typeof SET_BOOKS,
  payload: string[]
}
export const setBooks = (payload:string[]):SetBooksActionType => ({
  type: SET_BOOKS,
  payload
});


type SetBooksDetailsActionType = {
  type: typeof SET_BOOK_DETAILS,
  payload: string[]
}
export const setBooksDetails = (payload:string[]):SetBooksDetailsActionType => ({
  type: SET_BOOK_DETAILS,
  payload
});



type SetCharactersActionType = {
  type: typeof SET_CHARACTERS,
  payload: string[]
}
export const setCharacters = (payload:string[]):SetCharactersActionType => ({
  type: SET_CHARACTERS,
  payload
});


type SetLoadingActionType = {
  type: typeof SET_LOADING,
  payload: boolean
}
export const setLoading = (payload:boolean):SetLoadingActionType => ({
  type: SET_LOADING,
  payload
});


type SetLoaderActionType = {
  type: typeof SET_LOADER,
  payload: boolean
}
export const setLoader = (payload:boolean):SetLoaderActionType => ({
  type: SET_LOADER,
  payload
});

export type BooksActionsTypes = SetBooksActionType | SetBooksDetailsActionType | SetCharactersActionType | SetLoadingActionType | SetLoaderActionType;