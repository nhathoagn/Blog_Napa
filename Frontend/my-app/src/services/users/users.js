import http from "../../http.common"
class UserServices {
    getAll(){
        return http.get("/user/account")
    }
    get(id){
        return http.get(`/user/${id}`)
    }
    create(data){
        return http.post("/user/signup",data)
    }
    delete(){
        return http.delete(`/user/me`)
    }
    search(data){
        return http.get("/user/search",data)
    }
}
 export default new UserServices()
