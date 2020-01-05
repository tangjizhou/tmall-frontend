import $http from "../framework/axios";

export const dictionaryApi = {};

export const enumApi = {

  dataState() {
    return $http.get("/enum/data-state");
  }

};
