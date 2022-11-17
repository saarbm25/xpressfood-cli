export const SET_EMAIL = 'SET_EMAIL';
export const SET_PASSWORD = 'SET_PASSWORD';

export const SET_SEARCH_TERM = 'SET_SEARCH_TERM'

export const SET_CATEGORY = 'SET_CATEGORY'

export const setEmail = (email) => dispatch => {
    dispatch({
        type: SET_EMAIL,
        payload: email,
    });
}

export const setPassword = (password) => dispatch => {
    dispatch({
        type: SET_PASSWORD,
        payload: password,
    });
}

export const setSearchTerm = (searchTerm) => dispatch => {
    dispatch({
        type: SET_SEARCH_TERM,
        payload: searchTerm,
    });
}

export const setCategory = (category) => dispatch => {
    dispatch({
        type: SET_CATEGORY,
        payload: category,
    });
}

