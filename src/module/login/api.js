import $http from "../../framework/axios";

export const loginApi = {

  login: function (username, password) {
    return $http.get("/auth/login", {
      params: {
        username: username,
        password: password
      }
    })
  }
};
