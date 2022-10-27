const SERVERLESS_ENDPOINT =
  "https://edogsxxila.execute-api.eu-west-1.amazonaws.com";
const LOCAL_ENDPOINT = "http://192.168.56.1:5000";

export const endpoint = () => {
  return SERVERLESS_ENDPOINT;
  // return LOCAL_ENDPOINT;
};
