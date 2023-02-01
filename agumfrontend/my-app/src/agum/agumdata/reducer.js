

import {GET_DATA_ERROR, GET_DATA_REQ,GET_DATA_SUCCESS,} from "./action";
  
  const initState = {
    isLoading: false,
    isError: false,
    data: [],
  };
  
  export const dataReducer = (state = initState, { type, payload }) => {
    switch (type) {
      case GET_DATA_REQ:
        return {
          ...state,
          isLoading: true,
          isError: false,
          data: [],
        };
      case GET_DATA_ERROR:
        return {
          ...state,
          isLoading: false,
          isError: true,
          data: [],
        };
      case GET_DATA_SUCCESS:
        return {
          ...state,
          isLoading: false,
          isError: false,
          data: payload,
        };
      
  
      default:
        return state;
    }
  };