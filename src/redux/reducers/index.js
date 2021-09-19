/* eslint-disable import/no-anonymous-default-export */
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import ApiStatusCheck from "./ApiStatusCheck";

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    apiStatusCheck: ApiStatusCheck,
  });
