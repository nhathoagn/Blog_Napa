import http from "../../http.common"

class LoginServices {
  login(data){
      return http.post("/login", data)
    }
}

export default new LoginServices
