import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const baseUrl = "https://udhaar-staging.herokuapp.com/api";

export const FireRequest = async (
  method,
  path,
  body,
  bodyRequired,
  pathParam,
  params,
  authenticationRequired
) => {
  //headers
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  if (authenticationRequired)
    headers.append("Authorization", localStorage.getItem("access_token"));

  // fetch api options
  const options = {
    method: method,
    headers: headers,
  };

  if (bodyRequired) options["body"] = JSON.stringify(body);

  // modifying path according to params
  if (params) {
    Object.entries(params).map((obj) => {
      path = path.replace(`:${obj[0]}`, obj[1]);
    });
  }

  // modifying path according to pathParam
  if (pathParam) {
    path = path + "?";
    Object.entries(pathParam).map((obj) => {
      path += `${obj[0]}=${obj[1]}`;
    });
  }

  // calling fetch api
  const response = fetch(baseUrl + path, options)
    .then((response) => {
      const data = response.json();
      return Promise.all([response, data]);
    })
    .then((res) => {
      if (res[0].status === 401) {
        toast.error("Unauthorized access denied");
        localStorage.removeItem("access_token");
      } else if (res[0].status === 405) toast.error("Permission denied");
      else if (res[0].status >= 400) {
        for (var k in res[1]) {
          if (typeof res[1][k] === "string")
            toast.error(
              res[1][k].replace(/\w\S*/g, (w) =>
                w.replace(/^\w/, (c) => c.toUpperCase())
              )
            );
          else
            toast.error(
              res[1][k][0].replace(/\w\S*/g, (w) =>
                w.replace(/^\w/, (c) => c.toUpperCase())
              )
            );
        }
      }

      return res;
    })
    .catch((err) => toast.error("Something went wrong"));
  return response;
};
