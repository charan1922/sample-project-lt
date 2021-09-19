import getConfig from "./configSettings";

export const ApiUrl = () => {
  return `${
    (getConfig("sslEnabled") === "true" ? "https://" : "http://") +
    getConfig("APIEndPoint")
  }${
    getConfig("APIPort") !== "null" ? `:${getConfig("APIPort")}` : ""
  }/${getConfig("APIVersion")}/`;
};
