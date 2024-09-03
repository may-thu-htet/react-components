export const httpRequest = async (
  url,
  method = "GET",
  body = null,
  headers = {},
  authToken = null
) => {
  try {
    const options = {
      method,
      headers: {
        "Content-type": "application/json",
        ...headers,
      },
    };

    // if there is token, add it to authorization header
    if (authToken) {
      options.headers["Autorization"] = `Bearer ${authToken}`;
    }

    // if there is body, add it to the resquest
    if (body) {
      options.body = JSON.stringify(body);
    }

    // make the request
    const response = await fetch(url, options);

    // check if it is ok
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "http request failed");
    }

    // try to parse json if applicable
    const contentType = response.headers.get("Content-type");
    if (contentType && contentType.includes("application/json")) {
      return await response.json();
    } else {
      // if the response is not json
      return await response.text();
    }
  } catch (error) {
    console.log("Error in http request:" + error);
    throw error;
  }
};
