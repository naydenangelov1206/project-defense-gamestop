import { baseUrl } from "../utils/address";

import * as request from "./requester";

export function login(email, password) {
  return request.post(baseUrl + "/users/login", { email, password });
}

export async function logout(accessToken) {
  try {
    const res = await fetch(baseUrl + "/users/logout", {
      headers: {
        "X-Authorization": accessToken,
      },
    });

    if (res.status === 204) {
      return res;
    }
  } catch (err) {
    console.log(err);
  }
}

export function register(email, password) {
  return request.post(baseUrl + "/users/register", {
    email,
    password,
  });
}
