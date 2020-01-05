import $http from "../../framework/axios";

export const userApi = {

  listByPage: function () {

  },
  listAll: function (searchItem) {
    return $http.get("/user/listAll", {params: searchItem});
  }
};
