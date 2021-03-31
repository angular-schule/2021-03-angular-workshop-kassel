import { Action, createReducer, on } from '@ngrx/store';
import { Book } from '../shared/book';
import * as BookActions from './book.actions';

export const bookFeatureKey = 'book';

export interface State {
  books: Book[];
  loading: boolean;
  error: string;
}

export const initialState: State = {
  books: [],
  loading: false,
  error: ''
};


export const reducer = createReducer(
  initialState,

  on(BookActions.loadBooks, state => ({
    ...state,
    loading: true,
    error: ''
  })),

  on(BookActions.loadBooksSuccess, (state, { data: books }) => ({
    ...state,
    loading: false,
    error: '',
    books
  })),

  on(BookActions.loadBooksFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error: error.message
  }))
);

