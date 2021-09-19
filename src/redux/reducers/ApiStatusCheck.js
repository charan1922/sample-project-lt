import { createSlice } from "@reduxjs/toolkit";
import { httpGet } from "../../utils/Rest";

const initialData = {
  apiStatus: null,
  isLoading: false,
  errorMsg: null,
  successMsg: null,
};

const slice = createSlice({
  name: "ApiStatusCheck", //Reference Name, It can be anything
  initialState: {
    ...initialData,
  },
  reducers: {
    fetchStart: (state) => {
      state.isLoading = true;
      state.errorMsg = null;
    },
    apiHealthData: (state, action) => {
      state.apiStatus = action.payload;
      state.isLoading = false;
      state.errorMsg = null;
    },
    fetchError: (state, action) => {
      state.errorMsg = action?.payload?.data?.error;
      state.isLoading = false;
    },
    fetchSuccess: (state, action) => {
      state.successMsg = action.payload;
      state.isLoading = false;
    },
  },
});

export default slice.reducer;

// Actions

const { apiHealthData, fetchStart, fetchError, fetchSuccess } = slice.actions;

export const checkAPIStatus = () => {
  return (dispatch) => {
    dispatch(fetchStart());
    httpGet(`heartbeat`)
      .then((res) => {
        console.log(res, ":data");
        if (res?.status === 200) {
          dispatch(apiHealthData(res.data));
          dispatch(fetchSuccess(res.data));
        } else {
          dispatch(fetchError(res.message));
        }
      })
      .catch((error) => {
        dispatch(fetchError(error.message));
      });
  };
};
