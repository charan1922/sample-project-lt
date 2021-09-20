import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { httpGet } from "../../utils/Rest";

const initialLeadsData = {
  leadsData: null,
  isLoading: false,
  errorMsg: null,
  successMsg: null,
};

const slice = createSlice({
  name: "LeadsDataService", //Reference Name, It can be anything
  initialState: {
    ...initialLeadsData,
  },
  reducers: {
    fetchStart: (state) => {
      state.isLoading = true;
      state.errorMsg = null;
    },
    leadsData: (state, action) => {
      state.leadsData = action.payload;
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

const { leadsData, fetchStart, fetchError, fetchSuccess } = slice.actions;

export const getLeadsData = () => {
  return (dispatch) => {
    dispatch(fetchStart());
    httpGet(`https://614800ea65467e0017384c8d.mockapi.io/v1/data`)
      .then((res) => {
        if (res?.status === 200) {
          dispatch(leadsData(res.data));
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
