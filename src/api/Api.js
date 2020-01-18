import apisauce from "apisauce";

import { Config } from "@app/api";

const get = (baseURL = Config.baseUrl) => {
    const api = apisauce.create({ baseURL });

    const user = (token) => api.get(`/getUser`, {}, { headers: { "Authorization": `Bearer ${token}` } });
    const logout = (token) => api.get(`/logout`, {}, { headers: { "Authorization": `Bearer ${token}` } });
    const items = (token) => api.get(`/donasi/getDonation`, { status: 2 }, { headers: { "Authorization": `Bearer ${token}` } });
    const delivery = (token) => api.get(`/delivery/getDelivery`, {}, { headers: { "Authorization": `Bearer ${token}` } });
    const history = (token) => api.get(`/delivery/getHistory`, {}, { headers: { "Authorization": `Bearer ${token}` } });
    const detailHistory = (token, id) => api.get(`/delivery/getHistoryDetail/${id}`, {}, { headers: { "Authorization": `Bearer ${token}` } });

    return {
        user, logout, items, delivery, history, detailHistory
    }
}

const post = (baseURL = Config.baseUrl) => {
    const api = apisauce.create({ baseURL });

    const login = (email, password) => api.post(`/loginAsDriver`, { email: email, password: password });
    const delivery = (token, id) => api.post(`/delivery`, { id: id }, { headers: { "Authorization": `Bearer ${token}` } });
    const changePassword = (token, oldPassword, password) => api.post(`/changePassword`, { oldPassword: oldPassword, password: password }, { headers: { "Authorization": `Bearer ${token}` } });
    const updateProfile = (token, name, email) => api.post(`/updateProfile`, { name: name, email: email }, { headers: { "Authorization": `Bearer ${token}` } });

    return {
        login, delivery, changePassword, updateProfile
    }
}

export default {
    get, post
}