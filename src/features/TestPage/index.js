import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PageLoader from "../../components/PageLoader";
import {
  ErrorSnackbar,
  SuccessSnackbar,
} from "../../components/CustomSnackBar";
import { checkAPIStatus } from "../../redux/reducers/ApiStatusCheck";

export default function TestPage() { //to check api status
  const dispatch = useDispatch();
  const { apiStatus, isLoading, successMsg, errorMsg } = useSelector(
    ({ apiStatusCheck }) => apiStatusCheck
  );

  useEffect(() => {
    dispatch(checkAPIStatus());
  }, []);

  return (
    <div>
      <div>APITest</div>
      <div>{apiStatus}</div>

      {isLoading && <PageLoader />}
      {errorMsg && <ErrorSnackbar errorMsg={errorMsg} />}
      {successMsg && <SuccessSnackbar successMsg={successMsg} />}
    </div>
  );
}
