import { config } from "./init/index";
// import cookie from 'react-cookie'

export default function getConfig(parameter) {
  // var conf = cookie.load('Config');
  let conf = null;
  if (conf == null) conf = config.default;
  return conf[parameter];
}
