import * as axios from 'axios';
import { unFollow } from '../redux/users-reducer';

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        'API-KEY': 'fd7fda36-63af-4982-aea3-2f08e00fae39'
    }
})

export const usersAPI = {
    async getUsers(currentPage = 1, pageSize = 5) {
        let response = await instance.get(`users?page=${currentPage}&count=${pageSize}`)
        return response.data
    },
    async unFollow(userID) {
        let response = await instance.delete(`follow/${userID}`)
        return response.data;
    },
    async follow(userID) {
        let response = await instance.post(`follow/${userID}`)
        return response.data;
    },
    async getProfile(userID) {
        let response = await profileAPI.getProfile(userID);
        return response;
    }

}
export const profileAPI = {
    async getProfile(userID) {
        let response = await instance.get(
            `profile/${userID}`
        )
        return response.data;
    },
    async getStatus(userID) {
        return await instance.get(
            `profile/status/${userID}`
        )
    },
    async updateStatus(status) {
        let response = await instance.put(
            `profile/status`
            , {
                status: status,
            })
        return response

    }

}

export const authAPI = {
    async me() {
        let response = await instance.get(
            `auth/me`
        )
        return response.data;
    },
    async login(email, password, rememberMe) {
        return await instance.post(`/auth/login`,
            { email, password, rememberMe })
    },
    async logout() {
        return await instance.delete(`/auth/login`);
    }
}
