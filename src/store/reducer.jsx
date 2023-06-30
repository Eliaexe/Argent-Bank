const initialState = {
    token: null,
  };
  
  export const tokenReducer = (state = initialState, action) => {
    if (action.type === 'token/addToken') {
      return {
        ...state,
        token: action.payload
      };
    } else {
      return state;
    }
  };
  
  export default tokenReducer;
  
  export const nameReducer = (state = initialState, action) => {
    if (action.type === 'name/addName') {
      return {
        ...state,
        name: action.payload.name,
        surname: action.payload.surname
      };
    } else {
      return state;
    }
  };
  