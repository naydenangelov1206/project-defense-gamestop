export async function request(method, url, data) {
  try {
    const userString = localStorage.getItem("user");

    const auth = JSON.parse(userString || {});

    let headers = {};

    if (auth.accessToken) {
      headers["X-Authorization"] = auth.accessToken;
    }

    let requestBuilder;
    if (method === "GET") {
      requestBuilder = fetch(url, { headers });
    } else {
      requestBuilder = fetch(url, {
        method,
        headers: {
          ...headers,
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
    }
    const response = await requestBuilder;

    const result = await response.json();

    return result;
  } catch (err) {
    console.log(err);
  }
}

export const get = request.bind({}, "GET");
export const post = request.bind({}, "POST");
export const put = request.bind({}, "PUT");
export const del = request.bind({}, "DELETE");
