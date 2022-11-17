import { SET_CATEGORY, SET_EMAIL, SET_PASSWORD, SET_SEARCH_TERM } from './actions';

const userInitialState = {
  email: '',
  password: '',
};

const searchTerm = {
  term: '',
};

const selectedCategory = {
    category: '0',
  };

export function userReducer(state = userInitialState, action) {
  switch (action.type) {
    case SET_EMAIL:
      return {...state, email: action.payload};
    case SET_PASSWORD:
      return {...state, password: action.payload};
    default:
      return state;
  }
}

export function searchReducer(term = searchTerm, action) {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return {...term, term: action.payload};
    default:
      return term;
  }
}

export function categoryReducer(category = selectedCategory, action) {
    switch (action.type) {
      case SET_CATEGORY:
        return {...category, category: action.payload};
      default:
        return category;
    }
  }
