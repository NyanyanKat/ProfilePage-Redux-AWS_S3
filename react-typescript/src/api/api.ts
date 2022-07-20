import http from "../FetchDataHook/FetchData";

class Api {
    getAll() {
        return http.get('/profile');
    }
    add(data:any) {
        return http.post('/profile', data);
    }
    update(id:any, data:any) {
        return http.put(`/profile/${id}`, data);
    }
    delete(id:any) {
        return http.delete(`/profile/${id}`);
    }
}

export default new Api();