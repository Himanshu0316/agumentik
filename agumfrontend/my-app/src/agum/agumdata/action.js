export const GET_DATA_REQ = "GET_DATA_REQ";
export const GET_DATA_ERROR = "GET_DATA_ERROR";
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
export const DELETE_DATA = "DELETE_DATA";

export const getDataReq = () => ({
  type: GET_DATA_REQ,
});

export const getDataError = () => ({
  type: GET_DATA_ERROR,
});

export const getDataSuccess = (payload) => ({
  type: GET_DATA_SUCCESS,
  payload,
});
