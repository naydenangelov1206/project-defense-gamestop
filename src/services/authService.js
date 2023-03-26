import { baseUrl } from "../utils/address";

import * as request from "./requester";

export async function login(email, password) {
  try {
    const result = await request.post(baseUrl + "/users/login", {
      email,
      password,
    });

    return result;
  } catch (err) {
    throw err;
  }
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

export async function register(email, password) {
  try {
    const result = await request.post(baseUrl + "/users/register", {
      email,
      password,
    });

    return result;
  } catch (err) {
    throw err;
  }
}
