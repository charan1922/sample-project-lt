import { createSlice } from "@reduxjs/toolkit";
import { httpGet } from "../../utils/Rest";

const initialData = {
  totalProjectionsData: {},
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
    updateProjectionsData: (state, action) => {
      state.totalProjectionsData = action.payload;
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

const { updateProjectionsData, fetchStart, fetchError, fetchSuccess } =
  slice.actions;

export const fetchTotalProjections = (connectorId, productType, freqValue) => {
  return (dispatch) => {
    dispatch(fetchStart());
    let url = `total/connector/${connectorId}`;
    url = productType || freqValue ? `${url}?` : url;
    url = productType ? url + `product=${productType}` : url;
    url = freqValue ? `${url}&` : url;
    url = url + `timeframe=${freqValue}`;

    httpGet(url)
      .then((res) => {
        console.log(res, ":projections data");
        if (res?.status === 200) {
          dispatch(updateProjectionsData(res.data));
          dispatch(fetchSuccess());
        } else {
          dispatch(fetchError(res.message));
        }
      })
      .catch((error) => {
        dispatch(fetchError(error.message));
      });
  };
};
