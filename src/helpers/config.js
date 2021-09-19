const {
  REACT_APP_API_END_POINT,
  REACT_APP_API_PORT,
  REACT_APP_API_LABEL,
  REACT_APP_API_VERSION,
  REACT_APP_SSL_ENABLED,
} = process.env;
// eslint-disable-next-line no-console
console.log(process.env, "process.env");
const config = {
  default: {
    APIEndPoint: REACT_APP_API_END_POINT,
    APIPort: REACT_APP_API_PORT,
    APILabel: REACT_APP_API_LABEL,
    APIVersion: REACT_APP_API_VERSION,
    sslEnabled: REACT_APP_SSL_ENABLED,
  },
};

module.exports = { config };
