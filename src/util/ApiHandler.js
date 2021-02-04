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

// GET, POST, PUT, DELETE - CALL FUNCTIONS
function postReq(path, data) {
	return axios.post(`${BASE_URL}${path}`, data, getAuthHeader());
}

function getReq(path) {
	return axios.get(`${BASE_URL}${path}`, getAuthHeader());
}

function putReq(path, data) {
	return axios.put(`${BASE_URL}${path}`, data, getAuthHeader());
}

function deleteReq(path, data) {
	return axios.delete(`${BASE_URL}${path}`, data, getAuthHeader());
}

// Request for user login.
function userAuth(loginform) {
	return postReq("/auth/login", loginform);
}

// User requests
function getUser(id) {
	return getReq(`/account/${id}`);
}

function createUser(userInfo) {
	return postReq(`/account`, userInfo);
}

// Dog requests
function createDog(dogInfo) {
	return postReq(`/dog`, dogInfo);
}
function getPrefe(userId) {
	return getReq(`/preference/${userId}`);
}
function updatePrefe(userId, preferenceForm) {
	return putReq(`/preference/${userId}`, preferenceForm);
}

export default {
	putReq,
	deleteReq,
	userAuth,
	getUser,
	createUser,
	createDog,
	getPrefe,
	updatePrefe
};
