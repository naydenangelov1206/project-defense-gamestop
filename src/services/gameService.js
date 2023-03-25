import * as request from "./requester";

import { baseUrl } from "../utils/address";

export function getAll() {
  return request.get(baseUrl + "/data/games?sortBy=_createdOn%20desc");
}

export function getOne(gameId) {
  return request.get(baseUrl + "/data/games/" + gameId);
}

export function create(gameData) {
  return request.post(baseUrl + "/data/games", gameData);
}

export function edit(gameId, gameData) {
  return request.put(baseUrl + "/data/games/" + gameId, gameData);
}
