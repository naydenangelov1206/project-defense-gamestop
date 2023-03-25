import * as request from "./requester";

import { baseUrl } from "../utils/address";

export function getAll() {
  return request.get(baseUrl + "/data/games?sortBy=_createdOn%20desc");
}
