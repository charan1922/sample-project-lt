/* eslint-disable import/no-anonymous-default-export */
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import ApiStatusCheck from "./ApiStatusCheck";
import LeadsDataService from "./LeadsDataService";

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    apiStatusCheck: ApiStatusCheck,
    leadsDataService: LeadsDataService,
  });
