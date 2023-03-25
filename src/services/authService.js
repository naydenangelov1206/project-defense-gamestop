import { baseUrl } from "../utils/address";
import * as request from "./requester";

export function login(email, password) {
  return request.post(baseUrl + "/users/login", { email, password });
}
