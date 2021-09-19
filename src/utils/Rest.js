import axios from "axios";
import { ApiUrl } from "../helpers/getUrl";

const defaultHeaders = {
  Accept: "application/json",
};

function buildHeaders() {
  return { ...defaultHeaders };
}

// eslint-disable-next-line no-unused-vars
function authHeaders() {
  return { ...defaultHeaders };
}

// status check methods
export const checkData = (response) => {
  console.log(response, ":response");
  if (response?.status === 200) {
    return response;
  }
  return response;
};

// REST API methods with token
export const checkError = (error) => {
  if (error && error.response && [401, 403].includes(error.response.status)) {
    // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
    window.localStorage.clear();
    window.location.reload();
    // console.log("I am logged");
  }
  // if (response?.status >= 200 && response?.status < 400) {
  //   return response.data;
  // }
  return error.response;
};

export const httpGet = (url) => {
  return axios(ApiUrl() + url, {
    method: "GET",
    headers: buildHeaders(),
  })
    .then(checkData)
    .catch(checkError);
};

export const httpPost = (url, body) => {
  return axios
    .post(ApiUrl() + url, body, {
      headers: buildHeaders(),
    })
    .then(checkData)
    .catch(checkError);
};

export const httpPut = (url, body) => {
  return axios
    .put(ApiUrl() + url, body, {
      headers: buildHeaders(),
    })
    .then(checkData)
    .catch(checkError);
};

export const httpDelete = (url) => {
  return axios
    .delete(ApiUrl() + url, {
      headers: buildHeaders(),
    })
    .then(checkData)
    .catch(checkError);
};

export const httpPaginationPost = (url, body) => {
  return axios
    .post(ApiUrl() + url, body, {
      headers: buildHeaders(),
    })
    .then((response) => response)
    .catch(checkError);
};
