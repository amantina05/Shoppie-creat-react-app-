export const initialState = {
  keyword: '',
  movies: [],
};

export const actionTypes = {
  SET_SEARCH_KEYWORD: 'SET_SEARCH_KEYWORD',
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_SEARCH_KEYWORD:
      return {
        ...state,
        keyword: action.keyword,
      };
    default:
      return state;
  }
};

export default reducer;
