import axios from "axios";
import store from "./../store/index.js";

const BASE_URL = "/api/v1";

function getAuthHeader() {
	let token = store.state.currentUser.authtoken;
	if (token != "") {
		return {
			headers: {
				Authorization: `Bearer ${token}`
			}
		};
	}
}

function postReq(path, data) {
	return axios.post(`${BASE_URL}${path}`, data, getAuthHeader());
}

function getReq(path) {
	return axios.get(`${BASE_URL}${path}`, getAuthHeader());
}

function userAuth(loginform) {
	return postReq("/auth/login", loginform);
}

function getUser(id) {
	return getReq(`/account/${id}`);
}

function createUser(userInfo) {
	return postReq(`/account`, userInfo);
}
function createDog(dogInfo) {
	return postReq(`/dog`, dogInfo);
}
function getPrefe(userId) {
	return getReq(`/preference/${userId}`);
}

export default {
	userAuth,
	getUser,
	createUser,
	createDog,
	getPrefe
};
