import $http from "../../framework/axios";

export const userApi = {
  listAll: function (searchItem) {
    return $http.get("/user/list", {params: searchItem});
  }
};
