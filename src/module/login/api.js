import $http from "../../framework/axios";

export const loginApi = {

  login: function (username, password) {
    return $http.post("/auth/login", {
      username: username,
      password: password
    })
  }
};
