import { baseUrl } from "../utils/address";
import * as request from "./requester";

export function create(gameId, comment) {
  return request.post(baseUrl + "/data/comments", { gameId, text: comment });
}
